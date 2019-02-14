import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

let initalState = {
  count: 10
}
const reducer = (currentState=initalState, action) => {
  console.log("currentState:", currentState, "action:", action)

  switch(action.type){
    case INCREMENT:
      return {count: currentState.count + action.payload}
    case DECREMENT:
      return {count: currentState.count - action.payload}
    default:
      return currentState
  }
  //currentState.count++ BAD PRACTICE
}

const store = createStore(reducer)
console.log("Current store/state:", store.getState())

class App extends Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  )
}

const Counter  = () => {
  const increment = (num) => {
    store.dispatch({type: INCREMENT, payload: num})
  };
  const decrement = (num) => {
    store.dispatch({type: DECREMENT, payload: num})
  };
  
  return (
    <div className="Counter">
    <h1 className="App-title">Welcome to React</h1>
    <button onClick={() => decrement(5)}> -5 </button>
    <button onClick={() => decrement(1)}> - </button>
    <button onClick={() => increment(1)}> + </button>
    <button onClick={() => increment(3)}> +3 </button>
    <h1>{store.getState().count}</h1>
    <h3>{`The current count is less than ${store.getState().count + (5 - (store.getState().count % 5))}`}</h3>

    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('root'));
