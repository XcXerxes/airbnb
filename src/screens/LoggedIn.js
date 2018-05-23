import React, {Component} from 'react'
import LoggedInTabNavigator from '../navigators/LoggedTabNavigator'

export default class LoggedIn extends Component {
  static navigationOptions = () => ({
    header: null,
    gesturesEnabled: false
  })
  render () {
    return (
      <LoggedInTabNavigator />
    )
  }
}
