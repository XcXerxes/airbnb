import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'

export default class RoundedButton extends Component {
  render () {
    const {text, 
      background,
      loading,
      disabled,
      textSize,
      textWeight,
      iconPosition,
      textAlign,
      borderColor,
      textColor,
      handleOnPress,
      icon} = this.props
    const color = textColor || colors.black
    const backgroundColor = background || 'transparent'
    const fontSize = textSize || 16
    const fontWeight = textWeight || '600'
    const alignPosition = textAlign || 'center'
    const iconLocation = iconPosition || 'left'
    const border = borderColor || color.white
    const opacityStyle = disabled || loading ? .5 : 1
    const textOpacity = loading ? 0 : 1

    return (
      <TouchableOpacity 
        onPress={handleOnPress}
        style={[styles.wrapper, {opacity: opacityStyle, borderColor: border, backgroundColor}]}
        activeOpacity={0.7}
        disabled={disabled || loading}
      >
        <View style={styles.buttonTextWrapper}
        
        >
          {iconLocation === 'left' && !loading ? icon : null}
          {loading ?
           <View style={styles.loaderContainer}>
             <Image style={styles.loaderImage} 
              source={require('../../img/loading.gif')}
             />
           </View> : null
          }
          <Text 
          style={[styles.buttonText, {opacity: opacityStyle, color, fontSize, fontWeight, textAlign, alignPosition}]}
          >{text}</Text>
          {iconLocation === 'right' && !loading ? icon : null}
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
  icon: PropTypes.object,
  textSize: PropTypes.string,
  textWeight: PropTypes.string,
  textAlign: PropTypes.string,
  borderColor: PropTypes.string,
  iconPosition: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 15,
    alignItems: 'center'
    
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonText: {
    width: '100%'
  },
  loaderContainer: {
    width: 90,
    height: 90,
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    marginLeft: -45,
    top: '50%',
    marginTop: -45
  },
  loaderImage: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: '50%',
    marginLeft: -20,
    top: '50%',
    marginTop: -20,
    borderRadius: 15
  }
})