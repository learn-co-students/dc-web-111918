import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const showNum = 10

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    balance: 100,
    eatenSushiCounter: 0
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
      })
    })
  }

  handleClickMore = () => {
    let i = this.state.index
    if(i + showNum > this.state.sushis.length - 1){
      this.setState({
        index: 0
      })
    }
    else{
      this.setState({
        index: i + showNum
      })
    }
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
  
  getFourSushis = () => {
    let i = this.state.index
    let fourSushi = this.state.sushis.slice(i, i+showNum)
    return fourSushi
  }
  render() {
    let fourNewSushsi = this.getFourSushis()
    return (
      <div className="app">
        <SushiContainer
          sushiList={fourNewSushsi}
          onClickMore={this.handleClickMore}
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
