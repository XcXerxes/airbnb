import createReducer from '../helpers/createReducer'
import {NavigationActions} from 'react-navigation'
import { AppNavigator} from '../../navigators/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut')
const initNavState = AppNavigator.router.getStateForAction(firstAction)

export const nav = (state = initNavState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}
