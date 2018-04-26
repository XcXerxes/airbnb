import {compose, createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})

function configureStore (initState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
  return createStore(reducer, initState, enhancer)
}

export default configureStore({})