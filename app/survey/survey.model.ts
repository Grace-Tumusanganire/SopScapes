

export interface SurveyModel {
    id: number
    title: string
    answer: {
        emoji:string
        description: number
    }[]
  }