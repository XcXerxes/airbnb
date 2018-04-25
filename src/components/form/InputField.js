import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../styles/colors'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing
} from 'react-native'

export default class InputField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      secureInput: props.inputType === 'text' || props.inputType === 'password' ? true : false,
      scaleCheckmarkValue: new Animated.Value(0)
    }
  }
  scaleCheckmark = value => {
    Animated.timing(
      this.state.scaleCheckmarkValue,
      {
        toValue: value,
        duration: 400,
        easing: Easing.easeOutBack
      }
    ).start()
  }
  toggleShowPassword = () => {
    this.setState({secureInput: !this.state.secureInput})
  }
  render () {
    const {secureInput, scaleCheckmarkValue} = this.state
    const {labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle, onChangeText, showCheckmark, autoFocus, autoCapitalize} = this.props
    const fontSize = labelTextSize || 14
    const color = labelColor || colors.white
    const inputColor = textColor || colors.white
    const borderBottom = borderBottomColor || 'transparent'
    const keyboardType = inputType === 'email' ? 'email-address' : 'default'
    const iconScale = scaleCheckmarkValue.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [0, 1.6, 1]
    })
    const scaleValue = showCheckmark ? 1 : 0
    this.scaleCheckmark(scaleValue)
    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[styles.label, {fontSize, color}]}>{labelText}</Text>
        {inputType === 'password' ? 
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.toggleShowPassword}
          >
            <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity> : null
        }
        <Animated.View style={[{transform: [{scale: iconScale}]}, styles.checkmarkWrapper]}>
          <Icon 
            name="check"
            color={colors.white}
            size={20}
          />
        </Animated.View>
        <TextInput  
         autoCorrect={false}
         style={[styles.inputField, {color: inputColor, borderBottomColor: borderBottom}]}
         underlineColorAndroid="transparent"
         secureTextEntry={secureInput}
         onChangeText={onChangeText}
         keyboardType={keyboardType}
         autoFocus={autoFocus}
         autoCapitalize={autoCapitalize}
         autoCorrect={false}
        />
      </View>
    )
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  textColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onChangeText: PropTypes.func,
  showCheckmark: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoCapitalize: PropTypes.bool
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },
  label: {
    fontWeight: '700',
    marginBottom: 20
  },
  inputField: {
    padding: 0,
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20
  },
  showButton: {
    position: 'absolute',
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: '700'
  },
  checkmarkWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 12,
    overflow: 'hidden'
  }
})
