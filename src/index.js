import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './reducers'
import App from './App'
import './index.css'

const store = createStore(counter)
const render = () => ReactDOM.render(
  <App 
  value={store.getState()}
  onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
  onDecrement={() => store.dispatch({ type: 'DECREMENT' })}/>,
  document.getElementById('root')
)

render()
store.subscribe(render)

