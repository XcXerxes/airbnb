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
  constructor (props) {
    super(props)
    this.state = {
      secureInput: props.inputType === 'text' || props.inputType === 'password' ? false : true
    }
  }
  toggleShowPassword = () => {
    this.setState({secureInput: !this.state.secureInput})
  }
  render () {
    const {secureInput} = this.state
    const {labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle} = this.props
    const fontSize = labelTextSize || 14
    const color = labelColor || colors.white
    const inputColor = textColor || colors.white
    const borderBottom = borderBottomColor || 'transparent'
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
        <TextInput  
         autoCorrect={false}
         style={[styles.inputField, {color: inputColor, borderBottomColor: borderBottom}]}
         secureTextEntry={secureInput}
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
  customStyle: PropTypes.object
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
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  showButton: {
    position: 'absolute',
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: '700'
  }
})
