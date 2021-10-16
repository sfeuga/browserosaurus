import React from 'react'
import { Provider } from 'react-redux'

import store from '../store.js'
import App from './layout.js'

const Bootstrap: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Bootstrap
