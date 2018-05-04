import React, {Component} from 'react'
import {setHeaderStyle} from '../styles/navigation'
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class TurnOnNotification extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <Text>Hello</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  }
})
