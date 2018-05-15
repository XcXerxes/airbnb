import React, {Component} from 'react-native'
import PropTypes from 'prop-types'
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Stars extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stars: []
    }
  }
  get stars () {
    const {votes} = this.props
    const starsNumner = parseInt(votes)
    const starElements = []
    for (let i=0; i < 5; i++) {
      starElements.push(
        <Icon 
        name="star"
        />
      )
    }
  }

  render () {
    return (
      <View>
        {this.stars}
        <Text>hello world!!!</Text>
      </View>
    )
  }
}

Stars.propTypes = {

}

const styles = StyleSheet.create({

})