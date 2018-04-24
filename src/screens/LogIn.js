import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'
import InputField from '../components/form/InputField'

export default class LogIn extends Component {
  render () {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.LoginHeader}>Log In</Text>
            <InputField labelText="EMAIL ADDRESS" />
            <InputField labelText="PASSWORD" />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingLeft: 30, 
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  LoginHeader: {
    fontSize: 30,
    fontWeight: '300',
    color: colors.white,
    marginBottom: 30
  }
})
