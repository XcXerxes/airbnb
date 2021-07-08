import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import NoResult from '../components/saved/NoResult'

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
      <View style={styles.wrapper}>
        <NoResult />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: colors.white
  }
})
