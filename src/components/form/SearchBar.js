import React, {Component} from 'react'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

export default class SearchBar extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Icon 
          name="ios-search"
          size={22}
          color={colors.gray02}
          style={styles.searchIcon}
          />
          <Text style={styles.textInput}>Try "Cape Town"</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, .9)',
    width: '100%',
    height: 80,
    zIndex: 88
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray02,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: .7,
    shadowRadius: 10,
    borderRadius: 3,
    height: 41,
    marginTop: 28,
    marginLeft: 20,
    marginRight: 20
  },
  searchIcon: {
    marginLeft: 18
  },
  textInput: {
    marginLeft: 10,
    color: colors.gray02
  }
})
