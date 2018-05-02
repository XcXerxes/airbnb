import React, {Component} from 'react'
import { transparentHeaderStyle} from '../styles/navigation'
import LoggedInTabNavigator from '../navigators/LoggedTabNavigator'

export default class LoggedIn extends Component {
  static navigationOptions = () => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    gesturesEnabled: false
  })
  render () {
    return (
      <LoggedInTabNavigator />
    )
  }
}