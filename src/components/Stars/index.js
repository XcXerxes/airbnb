import React, {Component} from 'react'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Stars extends Component {
  constructor (props) {
    super(props)
  }
  get stars () {
    const {votes, size, color} = this.props
    const starsNumber = parseInt(votes)
    const starElements = []
    for (let i=0; i < 5; i++) {
      starElements.push(
        <Icon 
        key={i}
        name="star"
        size={size}
        color={starsNumber > i ? color : colors.gray02}
        style={styles.star}
        />
      )
    }
    return starElements
  }
  render () {
    const {votes} = this.props
    if (!this.stars.length) {
      return <View></View>
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.stars}>
          {this.stars}
          {votes ? <Text style={styles.votesNumber}>{votes}</Text> : null}
        </View>
      </View>
    )
  }
}

Stars.propTypes = {

}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    marginRight: 1
  },
  votesNumber: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
    marginLeft: 3
  }
})