import createReducer from '../helpers/createReducer'
import {NavigationActions} from 'react-navigation'
import { AppNavigator} from '../../navigators/AppNavigator'
import {StatusBar} from 'react-native'

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut')
const initNavState = AppNavigator.router.getStateForAction(firstAction)

export const nav = (state = initNavState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state)
  if (action.routeName === 'TurnOnNotification' || action.routeName === 'LoggedIn') {
    StatusBar.setBarStyle('dark-content', true)
  }
  return nextState || state
}
