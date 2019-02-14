import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import App from './components/App'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//goal is to inject some additional props into Header and Counter
//props we are trying to inject IS store.count

//higher order components
//subtask: create a Enhanced copy of Header where this copy has additional props color="blue"
// const withColor = (Component, color) => {
//   const EnhancedComponent = () => {
//     return <Component color={color}/>
//   }
//   return EnhancedComponent
// }
// const withCounter = (Component) => {
//   const EnhancedComponent = () => {
//     return <Component count={store.getState().count}/>
//   }
//   return EnhancedComponent
// }

// const BlueHeader = withColor(Header, "blue")
// const RedHeader = withColor(Header, "red")
