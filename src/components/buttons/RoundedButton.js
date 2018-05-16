import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'

export default class RoundedButton extends Component {
  render () {
    const {text, background, textColor, handleOnPress, icon} = this.props
    const color = textColor || colors.black
    const backgroundColor = background || 'transparent'
    return (
      <TouchableOpacity 
        onPress={handleOnPress}
        style={[styles.wrapper, {backgroundColor}]}
        activeOpacity={0.7}
      >
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[styles.buttonText, {color}]}>{text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  textColor: PropTypes.string,
  handleOnPress: PropTypes.func,
  icon: PropTypes.object
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: 15,
    alignItems: 'center'
    
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center'
  }
})