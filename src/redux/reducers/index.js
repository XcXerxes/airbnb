import {combineReducers} from 'redux'
import * as LoggedOut from './LoggedOut'
import * as Navigation from './navgation'
export default combineReducers(Object.assign(
  LoggedOut,
  Navigation
))
