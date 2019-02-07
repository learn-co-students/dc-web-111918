import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/self/get-four"
const showNum = 4

class App extends Component {

  state = {
    sushis: [],
    index: 1,
    balance: 100,
    eatenSushiCounter: 0
  }

  componentDidMount(){
    this.fetchSushi()
  }


  handleEatSushi = (sushiPrice) => {
    this.setState({
      balance: this.state.balance-sushiPrice,
      eatenSushiCounter: this.state.eatenSushiCounter+1
    })
  }

  handleGiveMoreMoney = () => {
    this.setState({
      balance: this.state.balance + 10
    })
  }


  fetchSushi = () => {
    fetch(API + `/${this.state.index}`)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
      })
    })
  }

  getFourSushis = () => {
    // change state.index to plus 4

    this.setState({index: this.state.index + 4}, this.fetchSushi)

    //then fetch to our endpoint
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.state.sushis}
          onClickMore={this.getFourSushis}
          onEatSushi={this.handleEatSushi}
          balance={this.state.balance}
        />
        <Table
          balance={this.state.balance}
          numEaten={this.state.eatenSushiCounter}
        />
        <button onClick={this.handleGiveMoreMoney}>Beg for money</button>
      </div>
    );
  }
}

export default App;
