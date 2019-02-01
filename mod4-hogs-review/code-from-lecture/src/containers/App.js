import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
import FiltersContainer from './FiltersContainer'
import HogsContainer from './HogsContainer'

import hogs from '../porkers_data';
const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'


class App extends Component {
  
  constructor(){
    super()
    this.state = {
      //put hogs array into state
      hogsData: hogs,
      //using sort as the term for order.
      sort: 'name',
      //added buttered key for filter by greased. 
      buttered: false
    }
  }


  
  
  handleSortHogs = () =>{
    // how do we get all hogs?
    let currentHogs = JSON.parse(JSON.stringify(this.state.hogsData))
    // shallow copy let currentHogs = [...this.state.hogsData]
    let sortedHogs = this.state.sort === 'name'? 

        currentHogs.sort((a,b) => a.name.localeCompare(b.name)) 
     :

        currentHogs.sort((a,b) => b[weight] - a[weight])

    return sortedHogs
    //take all the hogs and then sort them based on a criteria

  }

  setSortState= (valueOfSelect) =>{
    this.setState({
      sort: valueOfSelect
    })
  }

  //sets the state of butterd so that we display either all hogs or greased hogs. 
  setButteredState = () =>{
    this.setState({
      buttered: !this.state.buttered
    })
  }

  // this returns the sorted arry also filtered for greased if the state of buttered is true. 
  filterGreased = () =>{
    return this.state.buttered ? this.handleSortHogs().filter( hogObj => hogObj.greased === true) : this.handleSortHogs()
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <FiltersContainer
            setSortState={this.setSortState}
            setButteredState={this.setButteredState}
            butteredState={this.state.buttered}
          /> 
          <HogsContainer ourHogs={this.filterGreased()} /> 
          


      </div>
    )
  }
}

export default App;
