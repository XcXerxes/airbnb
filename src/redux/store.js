import {compose, createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})
const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)

function configureStore (initState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      navigationMiddleware,
      loggerMiddleware
    )
  )
  return createStore(reducer, initState, enhancer)
}

export default configureStore({})