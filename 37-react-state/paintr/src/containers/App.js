import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import PortraitList from './PortraitList'
import Searchbar from '../components/Searchbar'
import DisplayBox from '../components/DisplayBox'

//App is responsible for maintaining
//searchTerm and currentPortrait
class App extends Component {
  constructor(){
    super()
  }

  state = {
    searchTerm: "",
    currentPortrait: null
  }

  changeSearchTerm = (e) => {
    console.log(e.currentTarget.value)
    let inputText = e.currentTarget.value
    //we want to change searchTerm
    this.setState({searchTerm: inputText})
  }

  changeCurrentPortrait = (paintObj) => {
    console.log('inside changeCurrentPor')
    console.log(paintObj)
    this.setState(
      {currentPortrait: paintObj}
    )
  }

  render() {
    // console.log(this)
    return (
      <div>
        <Navbar
          link="https://www.google.com"
          color="pink"
          header="Paintr"
          tagline="Big Money Moves"
          icon="money"
        />
        <Searchbar
          text={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        {
          this.state.currentPortrait ? <DisplayBox
            portraitToDisplay={this.state.currentPortrait}
          /> : null
        }
        <PortraitList
          filterTerm={this.state.searchTerm}
          changePortrait={this.changeCurrentPortrait}
        />
      </div>
    )
  }
}

export default App;
