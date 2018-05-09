import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native'
import colors from '../../styles/colors'

export default class Listings extends Component {
  constructor () {
    super()
  }
  renderListings = () => {
    const {listings} = this.props
    return listings.map((item, index) => (
      <TouchableHighlight key={index} style={styles.card}>
        <View style={styles.cardContent}>
          <Image
          style={styles.cardImg}
          resizeMode="contain"
          source={item.photo}
          />
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    ))
  }
  render () {
    const {title, boldText, showAddToFav} = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllBtnText}>See all</Text>
            <Icon 
              name="angle-right"
              size={18}
              color={colors.gray04}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        {this.renderListings()}
        </ScrollView>
      </View>
    )
  }
}

Listings.propTypes = {
  title: PropTypes.string,
  listings: PropTypes.array
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 36
  },
  title: {
    color: colors.gray04
  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  seeAllBtnText: {
    color: colors.gray04,
    marginRight: 5
  },
  scrollViewContent: {
    paddingRight: 30
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15
  },
  card: {
    marginRight: 6,
    marginLeft: 4,
    width: 157,
    flexDirection: 'column',
    minHeight: 100
  },
  cardContent: {

  },
  cardImg: {
    width: undefined,
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginBottom: 7
  }
})
