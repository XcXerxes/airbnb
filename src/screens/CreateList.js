import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import InputField from '../components/form/InputField'
import RadioInput from '../components/form/RadioInput'

export default class CreateList extends Component {
  static navigationOptions = ({navigation}) => ({
    tabBarVisible: false,
    headerLeft: (<TouchableOpacity
      style={styles.closeButton}
      onPress={() => navigation.goBack()}
    >
      <Icon
        name="md-close"
        size={30}
        color={colors.black }
        />
    </TouchableOpacity>),
    headerStyle: styles.headerStyle
  })
  constructor (props) {
    super(props)
    this.listCreated = false
    this.state = {
      privacyOption: 'private',
      location: props.navigation.state.params.listing.location
    }
  }
  componentWillMount () {
    const {navigation} = this.props
    navigation.state.params.onCreateListClose(navigation.state.params.listing.id, this.listCreated)
  }
  handleLocationChange = (location) => {
    this.setState({location})
  }
  selectePrivacyOption = (privacyOption) => {
    this.setState({privacyOption})
  }
  render () {
    const {privacyOption, location} = this.state
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Create a List</Text>
          <View style={styles.content}>
            <View style={styles.inputWrapper}>
              <InputField 
                labelText="Title"
                labelTextSize={20}
                labelTextWeight="400"
                labelColor={colors.lightBlack}
                placeholder={location}
                value={location}
                showCheckmark={false}
                autoFocus={true}
                inputType="text"
                inputStyle={styles.inputStyle}
                borderBottomColor={colors.gray06}
                textColor={colors.lightBlack}
              />
            </View>
            <View style={styles.privacyOptions}>
              <Text style={styles.privacyHeading}>Privacy</Text>
              <TouchableHighlight
              style={styles.privacyOptionItem}
              underlayColor={colors.gray01}
              onPress={() => this.selectePrivacyOption('public')}
              >
                <View>
                  <Text style={styles.privacyOptionTitle}>Public</Text>
                  <Text style={styles.privacyOptionDescription}>Visible to everyone and included on your public Airbnb profile.</Text>
                  <View style={styles.privacyRadioInput}>
                    <RadioInput 
                    backgroundColor={colors.gray07}
                    borderColor={colors.gray05}
                    selectedBackgroundColor={colors.green01}
                    selectedBorderColor={colors.green01}
                    iconColor={colors.white}
                    selected={privacyOption === 'public'}
                    />
                  </View>
                </View>
              </TouchableHighlight>
              <View style={styles.divider}></View>
              <TouchableHighlight
              style={styles.privacyOptionItem}
              underlayColor={colors.gray01}
              onPress={() => this.selectePrivacyOption('private') }
              >
                <View>
                  <Text style={styles.privacyOptionTitle}>Private</Text>
                  <Text style={styles.privacyOptionDescription}>Visible only to you and any friends you invite.</Text>
                  <View style={styles.privacyRadioInput}>
                    <RadioInput 
                      backgroundColor={colors.gray07}
                      borderColor={colors.gray05}
                      selectedBackgroundColor={colors.green01}
                      selectedBorderColor={colors.green01}
                      iconColor={colors.white}
                      selected={privacyOption === 'private'}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  closeButton: {
    position: 'absolute',
    left: 20
  },
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0
  },
  heading: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.lightBlack,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15
  },
  content: {
    paddingTop: 50
  },
  inputWrapper: {
    paddingLeft: 20,
    paddingRight: 20
  },
  inputStyle: {
    fontSize: 18,
    fontWeight: '400',
    paddingBottom: 30
  },
  privacyOptions: {
    marginTop: 30
  },
  privacyHeading: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.lightBlack,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  privacyOptionItem: {
    flex: 1,
    padding: 20
  },
  privacyOptionTitle: {
    fontSize: 16,
    fontWeight: '200',
    color: colors.lightBlack
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray06,
    flex: 1,
    height: 1,
    marginLeft: 20,
    marginRight: 20
  },
  privacyRadioInput: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  privacyOptionDescription: {
    fontSize: 14,
    fontWeight: '200',
    color: colors.lightBlack,
    marginTop: 10,
    paddingRight: 60
  }
})
