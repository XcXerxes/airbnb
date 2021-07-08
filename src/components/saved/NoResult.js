import React, {Component} from 'react'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

export default class NoResult extends Component {
  render () {
    return (
      <View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Saved</Text>
          <Text style={styles.description}>Not every day is filled with adventures, but you can start planning for the next one.</Text>
          <Text style={styles.description}>Tap the heart on any home to start saving your favorites here.</Text>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.findHomesButton} onPress>
            <Text style={styles.findHomesButtonText}>Find homes</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%'
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.gray04,
    marginBottom: 40,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray04,
    paddingLeft: 20,
    paddingRight: 20
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 80,
    borderTopWidth: 1,
    borderTopColor: colors.gray05,
    paddingLeft: 20,
    paddingRight: 20
  },
  findHomesButton: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.pink,
    marginTop: 16,
    borderRadius: 3
  },
  findHomesButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600'
  }
})
