import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reportWebVitals from './reportWebVitals'
import createSagaMiddleware from 'redux-saga'
import jwt from 'jsonwebtoken'

import App from './App'
import { sagaWatcher } from './redux/sagas'
import rootReducer from './redux/reducers/rootReducer'
import { forbiddenWordsMiddleware } from './redux/middleware'

const token = jwt.sign({ foo: 'bar' }, 'shhhhh')
// console.log(token)

// const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__ &&
// window.__REDUX_DEVTOOLS_EXTENSION__()) || compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const saga = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk, forbiddenWordsMiddleware, saga))
)

saga.run(sagaWatcher)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
