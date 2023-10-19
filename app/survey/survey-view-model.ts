import { Observable, ObservableArray } from '@nativescript/core'
import { SurveyModel } from '../survey/survey.model'
import { SurveyService } from '../survey/survey.service'


export class SurveyViewModel extends Observable {

    private _questions: SurveyModel[]

    // the passed-in context object during the navigation will be here
    constructor(private _context) {
      super()
  
      //this._questions = SurveyService.getInstance().getQuestionById(1)
      console.log('survey view model' + this._questions)
    }
  
    get questions(): ObservableArray<SurveyModel> {
      return new ObservableArray(SurveyService.getInstance().getQuestions())
    }

    
}
