import { Frame, Observable, ObservableArray, ItemEventData } from '@nativescript/core'
import { PlacesModel } from './places/places.model'
import { PlacesService } from './places/places.service'
import { SurveyService } from './survey/survey.service'
import { SurveyModel } from './survey/survey.model'

export class HelloWorldModel extends Observable {
    private _places: PlacesModel[]

    constructor() {
        super()
        this.populatePlaces()
      }
      get places(): ObservableArray<PlacesModel> {
        return new ObservableArray(this._places)
      }
    
      populatePlaces(): void {
        this._places = PlacesService.getInstance().getPlaces()
      }

      onPlaceTap(args: ItemEventData): void {
        Frame.topmost().navigate({
          moduleName: 'survey/survey-page',
          context: { placeId: this._places[args.index].id }
        })
      }
    }


