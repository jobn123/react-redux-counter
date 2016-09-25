import React, { Component, PropTypes } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }
  componentDidMount() {
  }
  operationPlus() {
    console.log('operationPlus');
    this.props.onIncrement()
  }
  operationSubtraction() {
    console.log('operationSubtraction');
    this.props.onDecrement()
  }
  render() {
    const {count, total} = this.props.value;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        /**Container*/
        <div className="App-container">
          <div className="container-clicked-count">
            <span>you have clicked</span>
            <span> { total } times</span>
          </div>
          <div className="container-current-count">
            <span>current count is</span>
            <span> { count }</span>

            <span className="count-operation count-operation-plus" onClick={this.operationPlus.bind(this)}>+</span>
            <span className="count-operation count-operation-subtraction" onClick={this.operationSubtraction.bind(this)}>-</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
