import { awarns } from '@awarns/core';
import { AreaOfInterest, areasOfInterest } from '@awarns/geofencing';



export  class AppComponent { 

async onNavigatingTo() {
  // ... inside some view initialization function ...

  /* 1. Before setting up the tasks, set up areas of interest */

  // First, query for any existing areas of interest
  const aois = await areasOfInterest.getAll();

  const newAoIs: Array<AreaOfInterest> = [
    // Update the area of interest with the information of the area of your choice
    {
      id: 'geotec',
      name: 'Geotec',
      latitude: 39.9939082,
      longitude: -0.0739913,
      radius: 40,
    },
    {
        id: 'uji',
        name: 'UJI Campus',
        latitude: 39.9939082,
        longitude: -0.0739913,
        radius: 40,
      },
      // You can add more than one area of interest
      {
        id: 'grao',
        name: 'El Grao',
        latitude: 39.983949,
        longitude: -0.039771,
        radius: 40,
      },
    
      {
        id: 'citycenter',
        name: 'City center',
        latitude: 39.983949,
        longitude: -0.039771,
        radius: 40,
      },
    
      {
        id: 'ribalta',
        name: 'Parc Ribalta',
        latitude: 39.983949,
        longitude: -0.039771,
        radius: 40,
      },
    
      {
        id: 'rafalafena',
        name: 'Parc Rafalafena',
        latitude: 39.983949,
        longitude: -0.039771,
        radius: 40,
      },
    ];

  // Naive check to see if areas of interest have already been set up
  if (aois.length === newAoIs.length) {
    console.log('Areas already set up!');
    return;
  }

  // Ensure we start from something clean
  await areasOfInterest.deleteAll();

  // Insert the new area(s)
  await areasOfInterest.insert(newAoIs);
  console.log('Done setting up areas of interest!');

  /* 2. Then, set up tasks. This way, the geofencing task will already have the areas of interest */

  // This checks if all the registered tasks meet their pre-execution conditions:
  // - Permissions are granted
  // - System services are enabled
  const isReady = await awarns.isReady();
  if (!isReady) {
    const tasksNotReady = await awarns.tasksNotReady$;
    // This allows you to query which task(s), from the ones in use, are not ready
    // You can use this information to, for example, conditionally show different UI elements here, showing a rationale to your users about why certain permissions or functionality must be activated
    console.log(`The following tasks are not ready!: ${tasksNotReady}`);
    // This will automatically perform all the actions needed to prepare the tasks that are not yet ready
    await awarns.prepare();
    // Will throw an error if not all the tasks have been successfully prepared
  }

  /* 3. Finally, once everything else is ready, start the background execution workflow */

  awarns.emitEvent('startEvent');
  // Now the background workflow will start its execution by detecting changes in human activity

  // ...
}
}