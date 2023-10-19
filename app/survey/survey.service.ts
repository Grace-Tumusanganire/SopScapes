
import { SurveyModel } from './survey.model'

export class SurveyService {
  private questions: SurveyModel[] = [
    {
      id: 1,
      title: 'I perform my daily main tasks in this place (work, school)',
      answer: [ {
        emoji: "😡",
        description: 1
      },
      {
        emoji: "😠",
        description: 2
      },
      {
        emoji: "😐",
        description: 3
      },
      {
        emoji: "😊",
        description: 4
      },
      {
        emoji: "😃",
        description: 5
      }
      ]
    },
    {
        id: 2,
        title: 'I gradually find this place suitable for accomplishing my tasks',
        answer: [ {
          emoji: "😡",
          description: 1
        },
        {
          emoji: "😠",
          description: 2
        },
        {
          emoji: "😐",
          description: 3
        },
        {
          emoji: "😊",
          description: 4
        },
        {
          emoji: "😃",
          description: 5
        }
        ]
      },
      {
        id: 3,
        title: 'I feel joy when I visit this place.',
        answer: [ {
          emoji: "😡",
          description: 1
        },
        {
          emoji: "😠",
          description: 2
        },
        {
          emoji: "😐",
          description: 3
        },
        {
          emoji: "😊",
          description: 4
        },
        {
          emoji: "😃",
          description: 5
        }
        ]
      },
      {
        id: 4,
        title: 'My social interactions evolve the more I visit this place.',
        answer: [ {
          emoji: "😡",
          description: 1
        },
        {
          emoji: "😠",
          description: 2
        },
        {
          emoji: "😐",
          description: 3
        },
        {
          emoji: "😊",
          description: 4
        },
        {
          emoji: "😃",
          description: 5
        }
        ]
      },
      {
        id: 5,
        title: 'I feel safe in this place',
        answer: [ {
          emoji: "😡",
          description: 1
        },
        {
          emoji: "😠",
          description: 2
        },
        {
          emoji: "😐",
          description: 3
        },
        {
          emoji: "😊",
          description: 4
        },
        {
          emoji: "😃",
          description: 5
        }
        ]
      },
      {
        id: 6,
        title: 'I can easily commute to this place',
        answer: [ {
          emoji: "😡",
          description: 1
        },
        {
          emoji: "😠",
          description: 2
        },
        {
          emoji: "😐",
          description: 3
        },
        {
          emoji: "😊",
          description: 4
        },
        {
          emoji: "😃",
          description: 5
        }
        ]
      },
      {
        id: 7,
        title: 'I feel relaxed while navigating in the city',
        answer: [ {
          emoji: "😡",
          description: 1
        },
        {
          emoji: "😠",
          description: 2
        },
        {
          emoji: "😐",
          description: 3
        },
        {
          emoji: "😊",
          description: 4
        },
        {
          emoji: "😃",
          description: 5
        }
        ]
      },
   
  ]

  static getInstance(): SurveyService {
    return SurveyService._instance
  }

  private static _instance: SurveyService = new SurveyService()

  getQuestions(): SurveyModel[] {
    return this.questions
  }

  getQuestionById(id: number): SurveyModel | undefined {
    return this.questions.find((questions) => questions.id === id) || undefined
  }
}