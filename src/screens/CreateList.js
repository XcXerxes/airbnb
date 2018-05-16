import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ProfileContainer extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <Text>Create List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50
  }
})
