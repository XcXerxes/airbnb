import React, {Component} from 'react'
import colors from '../styles/colors'
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView
} from 'react-native'
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Loader from '../components/Loader'
import Notification from '../components/Notification'
export default class ForgotPassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formValid: true,
      loadingVisible: false,
      emailValid: false,
      emailAddress: ''
    }
  }
  handleEmailChange = (email) => {
    const emailCheckRegex = /./
    this.setState({emailAddress: email})
    if (!this.state.emailValid) {
      if(emailCheckRegex.test(email)) {
        this.setState({emailValid: true})
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({emailValid: false})
      }
    }
    console.log(`...${email}`)
  }
  goToNextStep = () => {
    this.setState({loadingVisible: true})
    setTimeout(() => {
      if (this.state.emailAddress === 'xc@gmail.com') {
        this.setState({
          loadingVisible: false,
          formValid: true
        }, () => {
          alert('success')
        })
      } else {
        this.setState({
          loadingVisible: false,
          formValid: false
        })
      }
    }, 2000)
  }
  handleCloseNotification = () => {
    this.setState({formValid: true})
  }
  render () {
    const {loadingVisible, formValid, emailValid} = this.state
    const background = formValid ? colors.green01 : colors.darkOrange
    return (
      <KeyboardAvoidingView
        style={[styles.wrapper, {backgroundColor: background}]}
        behavior="padding"
      >
      <View style={styles.form}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.forgotPasswordHeading}>Forgot your password</Text>
          <Text style={styles.forgotPasswordSubheading}>Enter your email to find your account</Text>
          <InputField
            customStyle={{marginBottom: 30}}
            textColor={colors.white}
            labelText="EMAIL ADDRESS"
            labelTextSize={14}
            labelColor={colors.white}
            borderBottomColor={colors.white}
            inputType="email"
            onChangeText={this.handleEmailChange}
            showCheckmark={emailValid}
          />
        </ScrollView>
        <NextArrowButton 
        handleNextButton={this.goToNextStep}
        disabled={!emailValid}
        />
        <View style={styles.notificationWrapper}>
          <Notification
          showNotification={!formValid}
          handleCloseNotification={this.handleCloseNotification}
          type="Error"
          firstLine="No account exists for the requested."
          secondLine="email address"
          />
        </View>
      </View>
      <Loader 
        visible={loadingVisible}
        animationType="fade"
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
  form: {
    flex: 1,
    marginTop: 90,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    paddingTop: 20
  },
  forgotPasswordHeading: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '300'
  },
  forgotPasswordSubheading: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 60
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
})