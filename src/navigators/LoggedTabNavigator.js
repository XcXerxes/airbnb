import {TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation'
import ExploreContainer from '../containers/ExploreContainer'
import InboxContainer from '../containers/InboxContainer'
import ProfileContainer from '../containers/ProfileContainer'
import SavedContainer from '../containers/SavedContainer'
import TripsContainer from '../containers/TripsContainer'
import CreateList from '../screens/CreateList'
import colors from '../styles/colors'

export const ExploreTab = StackNavigator({
  ExploreContainer: {screen: ExploreContainer},
  CreateList: {screen: CreateList}
}, {
  mode: 'modal'
})

const LoggedTabNavigator = TabNavigator({
  Explore: {screen: ExploreTab},
  Saved: {screen: SavedContainer},
  Trips: {screen: TripsContainer},
  Inbox: {screen: InboxContainer},
  Profile: {screen: ProfileContainer}
}, {
  tabBarOptions: {
    labelStyle: {
      fontWeight: '600',
      marginBottom: 5,
    },
    activeTintColor: colors.pink
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom'
})

export default LoggedTabNavigator
