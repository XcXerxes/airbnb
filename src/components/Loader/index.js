import React, {Component} from 'react'
import colors from '../../styles/colors'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet
} from 'react-native'

export default class Loader extends Component {
  render () {
    const {visible, animationType, onRequestClose} = this.props
    return (
      <Modal
      transparent={true}
      animationType={animationType}
      visible={visible}
      onRequestClose={onRequestClose}
      >
      <View style={styles.wrapper}>
        <View style={styles.loaderContainer}>
          <Image
            style={styles.loaderImage}
            source={require('../../img/loading.gif')}
          >

          </Image>
        </View>
      </View>      
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, .6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderContainer: {
    width: 90,
    height: 90,
    borderRadius: 15,
    backgroundColor: colors.white
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15
  }
})