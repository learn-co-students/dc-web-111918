import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'

import hogs from '../porkers_data';

import HogCard from '../containers/HogCard'
import FilterInputs from './FilterInputs';

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {
  
  state={
    currentHogs: hogs,
    filterGreased: false,
    filterName: "",
    filterWeight: "",
    sortBy: "name"
  }


  filterHog = () =>{
    let sortedBy = this.state.sortBy === "name" ? this.state.currentHogs.sort((a,b) => a.name.localeCompare(b.name)) : this.state.currentHogs.sort((a,b) => a[weight] - b[weight])
   
    let filteredbyName = sortedBy.filter(hog => hog.name.includes(this.state.filterName))

    let filteredbyWeight = this.state.filterWeight ? 
                          filteredbyName.filter( hog => (hog[weight] <= this.state.filterWeight))
                           : 
                          filteredbyName

    let filteredGreased = this.state.filterGreased ? 
                          filteredbyWeight.filter( hog => hog.greased === true) 
                          :
                          filteredbyWeight

    return filteredGreased
  }

  setAppState= (property, value) =>{
    //this lets you see what property of our gineric set state is being set.
    console.log( 'state property being changed: ', property)
    console.log( 'value of that property being set: ', value)
    console.log("")
    this.setState({
      [property]: value
    })
  }

  makeBacon = (hogObj) =>{
    let updatedHogList = [...this.state.currentHogs]
    const indexOfHog = updatedHogList.findIndex(ele => ele === hogObj)
    updatedHogList.splice(indexOfHog, 1)
    this.setState({
      currentHogs: updatedHogList
    },() =>{alert(`You now have ${hogObj[weight] * 30.9}lbs of bacon!`)})
  }

  render() {
    return (
      <div className="App">
          < Nav />

          <div className="ui grid container">
            <FilterInputs 
              setAppState={this.setAppState} 
              filterName={this.state.filterName}
              filterWeight={this.state.filterWeight}
              filterGreased={this.state.filterGreased}
              sortBy={this.state.sortBy}
            />

            {this.filterHog().map((hog, index) => 
              <HogCard 
                className="ui eight wide column" 
                hogObj={hog} 
                key={index}
                makeBacon={this.makeBacon}
              />)} 

          </div>
      

      </div>
    )
  }
}

export default App;
