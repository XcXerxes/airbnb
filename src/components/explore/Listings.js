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
import HeartButton from '../buttons/HeartButton'
import Stars from '../Stars'

export default class Listings extends Component {
  constructor(props) {
    super(props)
  }
  get randomColor () {
    const colorList = [
      colors.gray04,
      colors.darkOrange,
      colors.black,
      colors.brown01,
      colors.brown02,
      colors.blue,
      colors.green01
    ]
    return colorList[Math.floor(Math.random() * colorList.length)]
  }
  renderListings = () => {
    const {listings, showAddToFav, handleAddToFav} = this.props
    return listings.map((item, index) => (
      <TouchableHighlight key={index} style={styles.card}>
        <View style={styles.cardContent}>
        {showAddToFav ?  
          <View style={styles.addToFavoriteBtn}>
            <HeartButton 
              color={colors.white}
              selectedColor={colors.pink}
              itemId={item.id}
              handleAddToFav={handleAddToFav}
            /> 
          </View>
        : null }
          <Image
          style={styles.cardImg}
          resizeMode="contain"
          source={item.photo}
          />
          <Text style={[styles.listingType, {color: this.randomColor}]}>{item.type}</Text>
          <Text style={styles.listingTitle}
            numberOfLines={2}
          >{item.title}</Text>
          <Text style={styles.listingPrice}>${item.price} {item.priceType}</Text>
          <Stars 
          votes={item.stars}
          size={10}
          color={colors.green02}
          />
        </View>
      </TouchableHighlight>
    ))
  }
  render () {
    const {title, boldTitle, showAddToFav} = this.props
    const titleStyle = boldTitle ? {fontSize: 22, fontWeight: '600'} : {fontSize: 18}
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
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
  boldTitle: PropTypes.bool,
  listings: PropTypes.array,
  handleAddToFav: PropTypes.func
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
    marginBottom: 40,
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
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '700'
  },
  listingPrice: {
    color: colors.gray04,
    marginTop: 4,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: '300'
  },
  listingType: {
    fontSize: 13,
    fontWeight: '700'
  },
  addToFavoriteBtn: {
    position: 'absolute',
    right: 12,
    top: 7,
    zIndex: 2
  }
})
