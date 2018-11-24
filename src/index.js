import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import OrderBookContainer from './containers/OrderBookContainer'
import configureStore from './store/configureStore'
import rootReducer from './reducers'

const store = configureStore({ tests: [], filterId: 23 })

render(
  <Provider store={store}>
    <OrderBookContainer />
  </Provider>,
  document.getElementById('root')
)