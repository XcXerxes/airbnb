/**
 * @author xcxerxes
 */
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import LoggedOut from './src/screens/LoggedOut'
import LogIn from './src/screens/LogIn'
import ForgotPassword from './src/screens/ForgotPassword'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <LogIn />
      </Provider>
    )
  }
}
