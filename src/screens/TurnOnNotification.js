import React, {Component} from 'react'
import {setHeaderStyle} from '../styles/navigation'
import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import {NavigationActions} from 'react-navigation'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Platform
} from 'react-native'

const navigateToTabsAction = NavigationActions.navigate({
  routeName: 'LoggedIn'
})

export default class TurnOnNotification extends Component {
  static navigationOptions = () => ({
    headerLeft: null,
    gesturesEnabled: false,
    ...setHeaderStyle(Platform.OS)
  })
  constructor (props) {
    super(props)
    this.state = {
      pressStatusNotifyBtn: false,
      pressStatusSkipBtn: false
    }
  }
  handleNotifyBtnHideUnderlay = () => {
    this.setState({pressStatusNotifyBtn: false})
  }
  handleNotifyBtnShowUnderLay = () => {
    this.setState({pressStatusNotifyBtn: true})
  }
  handleSkipBtnHideUnderlay = () => {
    this.setState({pressStatusSkipBtn: false})
  }
  handleSkipBtnShowUnderLay = () => {
    this.setState({pressStatusSkipBtn: true})
  }
  render () {
    const {pressStatusNotifyBtn, pressStatusSkipBtn} = this.state
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
            <Icon 
              name="comments-o"
              size={46}
              style={styles.icon}
            />
            <Text style={styles.title}>
              Turn on notifications?
            </Text>
            <Text style={styles.description}>
              We can let you know when someone messages you, or notify you about other important account activity
            </Text>
            <TouchableHighlight
              style={[{backgroundColor: pressStatusNotifyBtn ? colors.green01 : colors.green02}, styles.notifyButton]}
              underlayColor={colors.green02}
              onShowUnderlay={this.handleNotifyBtnShowUnderLay}
              onHideUnderlay={this.handleNotifyBtnHideUnderlay}
              onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
            >
              <Text style={[styles.notifyButtonText, styles.buttonText]}>Yes, notify me</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[{backgroundColor: pressStatusNotifyBtn ? colors.gray01 : 'transparent'}, styles.skipButton]}
              underlayColor={colors.gray01}
              onShowUnderlay={this.handleSkipBtnShowUnderLay}
              onHideUnderlay={this.handleSkipBtnHideUnderlay}
              onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
            >
              <Text style={[styles.buttonText, styles.skipButtonText]}>Skip</Text>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
  icon: {
    color: colors.green01,
    marginBottom: 15
  },
  title: {
    fontSize: 28,
    color: colors.black,
    fontWeight: '600'
  },
  description: {
    fontSize: 16,
    paddingRight: 40,
    marginTop: 15,
    lineHeight: 22
  },
  notifyButton: {
    backgroundColor: colors.green01,
    width: 160,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 3,
    marginTop: 40
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    alignSelf: 'center'
  },
  skipButton: {
    width: 100,
    borderColor: colors.green01,
    borderWidth: 2,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 3,
    marginTop: 15
  },
  notifyButtonText: {
    color: colors.white
  },
  skipButtonText: {
    color: colors.green01
  }
})
