import { EventData, NavigatedData, Page } from "@nativescript/core";
import {SurveyViewModel} from './survey-view-model'
import { TapActionType, notificationsManager } from '@awarns/notifications'; 

export function navigatingTo(args: NavigatedData): void {
  const page = <Page>args.object
  
  
  console.log(new SurveyViewModel(undefined))
  page.bindingContext = new SurveyViewModel(page.navigationContext)


}



// notificationsManager.onNotificationTap((notification) => {
//   switch (notification.tapAction.type) {
//     case TapActionType.DELIVER_QUESTIONS:
//       const questionnaireId = notification.tapAction.id;
//       let questions;
//       switch (questionnaireId) {
//         case "periodic-questions":
//           questions = periodicQuestions;
//           break;
//         case "two-weeks-questions":
//           questions = twoWeeksAfterQuestions;
//           break;
//       }
//       // Show user interface with selected questions
//     }
//     // You might want to have other notification types...
// })