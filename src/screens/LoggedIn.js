import React, {Component} from 'react'
import { setHeaderStyle } from '../styles/navigation'
import LoggedInTabNavigator from '../navigators/LoggedTabNavigator'
import {Platform} from 'react-native'

export default class LoggedIn extends Component {
  static navigationOptions = () => ({
    headerLeft: null,
    gesturesEnabled: false,
    ...setHeaderStyle(Platform.OS)
  })
  render () {
    return (
      <LoggedInTabNavigator />
    )
  }
}
