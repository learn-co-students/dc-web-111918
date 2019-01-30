import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onAdoptPetHandler = (petObj) => {
    //Bad, don't do this -> petObj.isAdopted = true
    //don't mutate state directly
    // this.setState({
    //   pets: [...this.state.pets]
    // })

    let newArray = this.state.pets.map(pet => {
      if(pet.id === petObj.id){
        return {...pet, isAdopted: true} //this is the pet we want to adopt
      }
      return pet
    })
    this.setState({pets: newArray})
  }

  onFilterChangeHandler = (event) => {
    let filterString = event.target.value
    this.setState({filters: {type: filterString}})
  }
  //When the <select> changes, this.state.filters also changes

  //When the <button> is clicked,
  //make a fetch call, we get pets array
  //change pets state to be the new array

  getPets = () => {
    const type = this.state.filters.type
    let url;
    if(type === 'all'){
      url = '/api/pets'
    }else{
      url = `/api/pets?type=${type}`
    }
    fetch(url)
    .then(res => res.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.getPets}
                onChangeType={this.onFilterChangeHandler}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                listOfPetsToRender={this.state.pets}
                onAdoptPet={this.onAdoptPetHandler}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
