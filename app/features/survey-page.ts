import { TapActionType, notificationsManager } from '@awarns/notifications'; 
import { Page } from "@nativescript/core";

const page: Page = null; // Declare page at the module level
const questionSets = [
  {
      id: "frequentQuestions",
      questions: [
          { question: 'I perform my daily main tasks in this place (work, school, chores)', value: 0 },
          { question: 'I gradually find this place suitable for accomplishing my tasks', value: 0 },
          { question: 'I feel joy when I visit this place.', value: 0 },
          { question: 'My social interactions evolve the more I visit this place.', value: 0 },
          { question: 'I feel safe in this place', value: 0 },
          { question: 'I can easily commute to this place', value: 0 },
          { question: 'I feel relaxed while navigating in the city', value: 0 },

      ]
  },
  {
      id: "periodicQuestions",
      questions: [
        // { question: 'I perform my daily main tasks in this place (work, school, chores)', value: 0 },
        { question: 'I gradually find this place suitable for accomplishing my tasks', value: 0 },
        { question: 'I feel joy when I visit this place.', value: 0 },
        { question: 'My social interactions evolve the more I visit this place.', value: 0 },
        { question: 'I feel safe in this place', value: 0 },
        // { question: 'I can easily commute to this place', value: 0 },
        { question: 'I feel relaxed while navigating in the city', value: 0 },
      ]
  }
];

let currentSetIndex = 0; // Initially, display the first set
let currentQuestionIndex = 0; // Index of the current question in the current set

export function onNavigatingTo(args) {
  const page = args.object as Page;

  // Load the first set and first question
  loadSet(currentSetIndex);
  loadQuestion();
}

export function rateQuestion(selectedValue) {
  // Update the value for the current question
  questionSets[currentSetIndex].questions[currentQuestionIndex].value = selectedValue;

  // Proceed to the next question or switch to the next set
  currentQuestionIndex++;
  if (currentQuestionIndex < questionSets[currentSetIndex].questions.length) {
      loadQuestion();
  } else {
      // Switch to the next set or finish the survey
      currentSetIndex++;
      if (currentSetIndex < questionSets.length) {
          loadSet(currentSetIndex);
      } else {
          // Survey is complete, submit or process the data
      }
  }
}

function loadSet(setIndex) {
  // Set the current question set
  page.bindingContext.currentQuestionSet = questionSets[setIndex].id;
  currentQuestionIndex = 0; // Reset the question index to 0 when switching sets
}

function loadQuestion() {
  // Set the current question text
  page.bindingContext.currentQuestion = questionSets[currentSetIndex].questions[currentQuestionIndex].question;
}



notificationsManager.onNotificationTap((notification) => {
  switch (notification.tapAction.type) {
    case TapActionType.DELIVER_QUESTIONS:
      const questionnaireId = notification.tapAction.id;
      let questions;
      switch (questionnaireId) {
        case "frequentQuestions":
          questions = "periodicQuestions";
          break;
        case "two-weeks-questions":
          questions = "periodicQuestions";
          break;
      }
      // Show user interface with selected questions
    }
})

