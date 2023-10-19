import { HelloWorldModel } from './main-view-model'
import { NavigatedData, Page } from '@nativescript/core'

export function navigatingTo(args: NavigatedData):void  { 
  if (args.isBackNavigation) {
    return
  
}
  const page = <Page>args.object
  page.bindingContext = new HelloWorldModel()
}

