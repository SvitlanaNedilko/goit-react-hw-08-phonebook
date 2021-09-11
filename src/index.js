import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import './index.scss'
import { store, persistor } from './redux/store'
import { BrowserRouter } from 'react-router-dom'

export const BASE_URL = '/goit-react-hw-08-phonebook'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
)
