import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

function addQuestionAnswer (questionAnswer) {
  return {
    type: ADD_QUESTION_ANSWER,
    questionAnswer,
  }
}

export function handleAddQuestionAnswer (info) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    console.log(authedUser)

    //console.log(answer)

    //console.log(id)

    return saveQuestionAnswer(info)
      .then((questionAnswer) => dispatch(addQuestionAnswer(questionAnswer)))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
