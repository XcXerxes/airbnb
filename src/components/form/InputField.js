import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default class InputField extends Component {
  render () {
    const {labelText, labelTextSize, labelColor} = this.props
    const fontSize = labelTextSize || 14
    const color = labelColor || colors.white
    return (
      <View style={styles.wrapper}>
        <Text style={[styles.label, {fontSize, color}]}>{labelText}</Text>
        <TextInput  
         autoCorrect="false"
         style={styles.inputField}
        />
      </View>
    )
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },
  label: {
    fontWeight: '700',
    marginBottom: 10
  },
  inputField: {
    // borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  }
})
