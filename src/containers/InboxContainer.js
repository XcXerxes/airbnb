import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class InboxContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Inbox',
    tabBarIcon: ({tintColor}) => (
      <Icon 
        name="ios-archive-outline"
        size={25}
        color={tintColor}
      />
    )
  }
  render () {
    return (
      <View>
        <Text>Inbox Container</Text>
      </View>
    )
  }
}
