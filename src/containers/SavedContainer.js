import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SavedContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Saved',
    tabBarIcon: ({tintColor}) => (
      <Icon 
        name="ios-heart-outline"
        size={22}
        color={tintColor}
      />
    )
  }
  render () {
    return (
      <View>
        <Text>Saved Container</Text>
      </View>
    )
  }
}
