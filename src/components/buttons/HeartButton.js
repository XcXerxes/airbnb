import React, {Component} from 'react'
import colors from '../../styles/colors'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default class HeartButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addedToFavorite: false
    }
  }
  addToFavorite = () => {
    this.setState({addedToFavorite: !this.state.addedToFavorite})
  }
  render () {
    const {addedToFavorite} = this.state
    const {selectedColor, color} =  this.props
    return (
      <TouchableOpacity onPress={this.addToFavorite}
      style={styles.favoriteBtn}
      >
        <View>
          <Icon 
            name={addedToFavorite ? 'heart' : 'heart-o'}
            size={18}
            color={addedToFavorite ? selectedColor : color}
          />
          <Icon 
            name='heart-o'
            size={18}
            color={color}
            style={[
              {display: addedToFavorite ? 'flex' : 'none'},
              styles.selectedColor
            ]
            }/>
        </View>
      </TouchableOpacity>
    )
  }
}

HeartButton.propTypes = {
  color: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired
}
const styles = StyleSheet.create({
  favoriteBtn: {

  },
  selectedColor: {
    position: 'absolute',
    left: 0,
    top: 0
  }
})
