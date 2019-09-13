import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { receiveQuestions } from '../actions/questions'

const AUTHED_ID = null

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
