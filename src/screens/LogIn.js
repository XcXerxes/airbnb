import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Notification from '../components/Notification'
import Loader from '../components/Loader'

export default class LogIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formValid: true,
      emailValid: false,
      emailAddress: '',
      passwordValid: false,
      password: '',
      loadingVisible: false
    }
  }
  handleRequestClose = () => {
    if (this.state.loadingVisible) {
      this.setState({loadingVisible: false})
    }
  }
  // 箭头
  handleNextButton = () => {
    this.setState({
      loadingVisible: true
    })
    setTimeout(() => {
      if (this.state.emailAddress === 'xc@gmail.com' && this.state.passwordValid) {
        this.setState({formValid: true, loadingVisible: false}, () => {
          alert('success')
        })
      } else {
        this.setState({formValid: false, loadingVisible: false})
      }
    }, 2000)
  }
  // 提示文字
  handleCloseNotification = () => {
    this.setState({formValid: true})
  }
  // email change
  handleEmailChange = (email) => {
    const emailRegex = /./
    this.setState({emailAddress: email})
    if (!this.state.emailValid) {
      if (emailRegex.test(email)) {
        this.setState({emailValid: true})
      }
    } else {
      if (!emailRegex.test(email)) {
        this.setState({emailValid: false})
      }
    }
  }
  // password change
  handlePasswordChange = (password) => {
    this.setState({password})
    if(!this.state.passwordValid) {
      if (password.length > 4) {
        this.setState({passwordValid: true})
      }
    } else if (password.length <= 4) {
      this.setState({passwordValid: false})
    }
  }
  // check nextButton status
  toggleNextButtonState = () => {
    const {emailValid, passwordValid} = this.state
    if (emailValid && passwordValid) {
      return false
    }
    return true
  }
  render () {
    const {formValid, loadingVisible, emailValid, passwordValid} = this.state
    const showNotification = !formValid
    const backgroundColor = formValid ? colors.green01 : colors.darkOrange
    return (
      <KeyboardAvoidingView style={[styles.wrapper, {backgroundColor}]}
        behavior="padding"
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.LoginHeader}>Log In</Text>
            <InputField 
            labelText="EMAIL ADDRESS" 
            borderBottomColor={colors.white}
            inputType="Email"
            customStyle={{marginBottom: 30}}
            onChangeText={this.handleEmailChange}
            showCheckmark={emailValid}
            />
            <InputField 
            labelText="PASSWORD"
            borderBottomColor={colors.white}
            inputType="password"
            customStyle={{marginBottom: 30}}
            onChangeText={this.handlePasswordChange}
            showCheckmark={passwordValid}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton 
              handleNextButton={this.handleNextButton}
              disabled={this.toggleNextButtonState()}
            />
          </View>
          <View style={[styles.notificationWrapper, showNotification ? {marginTop: 10} : {}]}>
            <Notification 
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            firstLine="Those credentials don't look right."
            secondLine="Please try again."
            />
          </View>
        </View>
        <Loader
        visible={loadingVisible}
        animationType="fade"
        onRequestClose={this.handleRequestClose}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1
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
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 10
  },
  notificationWrapper:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 9
  }
})
