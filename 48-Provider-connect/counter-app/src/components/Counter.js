import React from 'react'
import {connect} from 'react-redux'
import {DECREMENT, INCREMENT} from '../redux/actionTypes'

class Counter extends React.Component {
  increment = (num) => {
    this.props.dispatch({type: INCREMENT, num})
  };
  decrement = (num) => {
    this.props.dispatch({type: DECREMENT, num})
  };

  render(){
    return (
      <div className="Counter">
      <h1 className="App-title">Welcome to React</h1>
      <h1>{this.props.countValue}</h1>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return{
    countValue: state.count
  }
}
export default connect(mapStateToProps)(Counter)
