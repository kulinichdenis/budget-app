import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { save, load } from 'redux-localstorage-simple'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/app.css'
import reducer from './reducers'
import App from './containers/App'

const createStoreWithMiddleware = applyMiddleware(save())(createStore)

const store = createStoreWithMiddleware(reducer, load())

render(	
  <Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
)