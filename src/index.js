import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import './index.css'
import { TodoListPage } from './app/todoList/container'

import reducers from './reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    store: reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={TodoListPage}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
