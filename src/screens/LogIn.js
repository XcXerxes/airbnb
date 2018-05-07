import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import {ActionCreators} from '../redux/actions'
import {View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../styles/colors'
import {setHeaderStyle} from '../styles/navigation'
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Notification from '../components/Notification'
import Loader from '../components/Loader'
import NavBarButton from '../components/buttons/NavBarButton'

class LogIn extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerRight: <NavBarButton
      handleButtonPress={() => navigation.navigate('ForgotPassword')}
      location="right"
      color={colors.white}
      text="Forgot Password"
    />,
    /* headerLeft: <NavBarButton 
    handleButtonPress={() => navigation.goBack()}
      location="left"
      icon={<Icon name="angle-left" color={colors.white} size={30} />}
    />, */
    headerTintColor: colors.white,
    ...setHeaderStyle(Platform.OS)
  })
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
    const {navigate} = this.props.navigation
    setTimeout(() => {
      const {emailAddress, password} = this.state
      if (this.props.logIn(emailAddress, password)) {
        this.setState({formValid: true, loadingVisible: false})
        navigate('TurnOnNotification')
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
    console.log(this.props.loggedInStatus)
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
            autoFocus={true}
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
          <NextArrowButton 
            handleNextButton={this.handleNextButton}
            disabled={this.toggleNextButtonState()}
          />
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
  notificationWrapper:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 9
  }
})
const mapStateToProps = (state) => {
  console.log(state)
  return {
    loggedInStatus: state.LoggedInStatus 
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
