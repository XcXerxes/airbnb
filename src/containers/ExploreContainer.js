import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import SearchBar from '../components/form/SearchBar'
import Categories from '../components/explore/Categories'
import {categoriesList} from '../data/categories'
import Listings from '../components/explore/Listings'
import listings from '../data/listings'

export default class ExploreContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Explore',
    tabBarIcon: ({tintColor}) => (
      <Icon 
        name="ios-search"
        size={22}
        color={tintColor}
      />
    )
  }
  renderListings = () => {
    return listings.map((item, index) => (
      <View key={`listing-${index}`}>
        <Listings key={`listing-item-${index}`}
          title={item.title}
          boldText={item.boldText}
          listings={item.listings}
          showAddToFav={item.showAddToFav}
        />
      </View>
    ))
  }
  render () {
    return (
      <View style={styles.wrapper}>
        <SearchBar />
        <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.heading}>Explore Airbnb</Text>
          <View style={styles.categories}>
            <Categories categories={categoriesList} />
          </View>
          {this.renderListings()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  scrollViewContent: {
    paddingBottom: 80
  },
  scrollView: {
    paddingTop: 80
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04
  },
  categories: {
    paddingLeft: 20,
    marginBottom: 40
  }
})
