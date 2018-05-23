import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import InputField from '../components/form/InputField'

export default class ProfileContainer extends Component {
  static navigationOptions = ({navigation}) => ({
    tabBarVisible: false,
    headerLeft: <TouchableOpacity
      style={styles.closeButton}
      onPress={() => navigation.goBack()}
    >,
      <Icon
        name="md-close"
        size={30}
        color={colors.black }
        />
    </TouchableOpacity>,
    headerStyle: styles.headerStyle
  })
  render () {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Create a List</Text>
          <View style={styles.content}>
            <View style={styles.inputWrapper}>
              <InputField 
                labelText="Title"
                labelTextSize={16}
                labelColor={colors.lightBlack}
                inputType="text"
                value="None"
                borderBottomColor={colors.gray06}
                textColor={colors.lightBlack}
              />
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
  }
})
