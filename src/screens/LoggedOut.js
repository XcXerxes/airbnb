import React, {Component} from 'react'
import colors from '../styles/colors'
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native'
import RoundedButton from '../components/buttons/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LoggedOut extends Component {
  onFacebookPress = () => {
    console.log('facebook button pressed!')
  }
  onCreateAccountPress = () => {
    alert('create account pressed')
  }
  onMoreOptionsPress = () => {
    alert('more')
  }
  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image style={styles.logo}
          source={require('../img/airbnb-logo.png')} />
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
          <RoundedButton text="Continue with Facebook" 
            textColor={colors.green01} background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton text="Create Account" 
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />
          <TouchableHighlight onPress={this.onMoreOptionsPress}
          style={styles.moreOptionsButton}>
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>

          <View style={styles.termWrapper}>
            <Text style={styles.termText}>By tapping Continue, Create Account or More</Text>
            <Text style={styles.termText}> options, </Text>
            <Text style={styles.termText}>I agree to Airbnb's </Text>
            <TouchableHighlight style={styles.termLinkButton}>
              <Text style={styles.termText}>Terms of Service</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.termLinkButton}>
              <Text style={styles.termText}>Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termText}>, </Text>
            <TouchableHighlight style={styles.termLinkButton}>
              <Text style={styles.termText}>Privacy Pollcy</Text>
            </TouchableHighlight>
            <Text style={styles.termText}>, and</Text>
            <TouchableHighlight style={styles.termLinkButton}>
              <Text style={styles.termText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termText}>.</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 0
  },
  moreOptionsButtonText: {
    fontSize: 16,
    color: colors.white
  },
  termWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30
  },
  termText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600'
  },
  termLinkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
})