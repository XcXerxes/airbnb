import React, {Component} from 'react'
import colors from '../../styles/colors'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  TouchableHighlight,
  StyleSheet
} from 'react-native'

export default class NextArrowButton extends Component {
  render () {
    const {disabled, handleNextButton} = this.props
    const opacityStyle = disabled ? {backgroundColor: 'rgba(255, 255, 255, .2)'} : {backgroundColor: 'rgba(255, 255, 255, .6)'} 
    return (
      <TouchableHighlight style={[opacityStyle, styles.button]} 
      disabled={disabled}
      onPress={handleNextButton}>
        <Icon name="angle-right" 
          color={colors.green01}
          size={32}
          style={styles.icon}
        />
      </TouchableHighlight>
    )
  }
}
NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 60,
    height: 60
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
})
