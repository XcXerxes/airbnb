import React, {Component} from 'react'
import colors from '../../styles/colors'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native'

export default class Categories extends Component {
  constructor (props) {
    super(props)
  }

  get Categories () {
    const { categories } = this.props
    return categories.map((category, index) => (
        <TouchableHighlight
          style={styles.card}
        >
          <Image style={styles.image}
          source={category.photo}
          />
        </TouchableHighlight>
      )
    )
  }
  render () {
    return (
      <ScrollView contentContainerStyle={styles.wrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {/* <View style={styles.wrapper}>
          <Text>hello cate</Text>
        </View> */}
        {this.Categories}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    height: 100,
    marginRight: 4,
    marginLeft: 4
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
})
