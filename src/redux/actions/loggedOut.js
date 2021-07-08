import * as types from './types'
import user from '../../data/user.json'

export function logIn(email, password) {
  return (dispath, getState) => {
    if (email === user.email && password === user.password) {
      dispath(setLoggedInState(true))
      return true
    }
    dispath(setLoggedInState(true))
    return false
  }
}

export function setLoggedInState (loggedInState) {
  return {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState
  }
}
