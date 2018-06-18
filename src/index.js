import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import './index.css'
import { TodoListPage } from './app/todoList/container'
import reducers from './reducers'
import { helloSaga } from './app/todoList'





let logger = store => next => action => {
  console.log('store')
  console.log(store.getState().store)
  next(action)
}

let sagaMiddleware = createSagaMiddleware()

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    store: reducers,
    routing: routerReducer
  }),
  applyMiddleware(logger, sagaMiddleware)
)
store.sagaTask = sagaMiddleware.run(helloSaga)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TodoListPage}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
