// graph.ts;
// import { BatteryLevelType } from '@awarns/battery';
import { TaskGraph, EventListenerGenerator, RunnableTaskDescriptor } from '@awarns/core/tasks';
import { TapActionType } from '@awarns/notifications';
import { recordsStore } from '@awarns/persistence';
import { interval, lastValueFrom, Observable, of } from 'rxjs';

class AppTaskGraph implements TaskGraph {



 async describe(
    on: EventListenerGenerator,
    run: RunnableTaskDescriptor
  ): Promise<void> {

    on('startEvent', run('startDetectingCoarseHumanActivityChanges'))
    // Once a non-stationary action becomes detected, the location of the phone will be collected every 1 minute
    // The collection of the phone location will stop once the phone becomes still again
    on('userFinishedBeingStill', run('acquirePhoneGeolocation').every(1, 'minutes').cancelOn('userStartedBeingStill'));

    // // Each time a geolocation becomes acquired, we'll check how close it is to the known areas of interest (which we'll set up later)
    on('geolocationAcquired',
      run('checkAreaOfInterestProximity', {
        nearbyRange: 200, // We can indicate from how many meters from the border of the area we understand that the phone is close to it 
        offset: 15, // Also, we can specify an offset (in meters too) to consider in the distance calculation (to mitigate the GPS error)
      })
    );

    // // Similarly, another notification will be delivered right after detecting that the phone has been detected inside the area
    on('movedInsideAreaOfInterest', run('sendNotification', {
      title: 'Survey generated, please respond',
      body: 'The in-situ survey has been generated, tap to respond',
      tapAction:{
        type: TapActionType.DELIVER_QUESTIONS,
        id: "periodic-questions",
      },
    })
  );

   on("showTwoWeeksQuestions", run("sendNotification", {
       title: "Survey generated, please respond",
       body: "The in-situ survey has been generated, tap to respond",
       tapAction: {
         type: TapActionType.DELIVER_QUESTIONS,
         id: "two-weeks-questions",
       },
     })
  );

// All the framework tasks output objects compatible the Record API (see core docs)
    // This allows us to persist them right after they are observed, with just a single line
    on('movedInsideAreaOfInterest', run('writeRecords'));

    on('notificationTapped', run('writeRecords'));
    
    on('stopEvent', run('stopDetectingCoarseHumanActivityChanges'));

  }

}

export const appTaskGraph = new AppTaskGraph();