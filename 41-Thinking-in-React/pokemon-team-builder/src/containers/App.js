import React, { Component } from 'react';
import '../App.css';
import PokemonList from './PokemonList'
import Stats from '../components/Stats'
import Searchbar from '../components/Searchbar'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000'

class App extends Component {
  state = {
    allPokemon: [],
    team: [],
    currentPokemon: null,
    searchTerm: ''
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        allPokemon: data.results
      })
    })
  }

  handleScout = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        currentPokemon: pokemon
      })
    })
  }

  handleAddPokemon = (pokemonObj) => {
    if(this.state.team.length<6 && !this.state.team.includes(pokemonObj)){
      this.setState({
        team: [...this.state.team, pokemonObj]
      })
    }
  }

  handleRemovePokemon = (pokemonObj) => {
    let copyOfTeam = [...this.state.team]
    let index = copyOfTeam.findIndex(pokemon => pokemon === pokemonObj)
    copyOfTeam.splice(index, 1)
    this.setState({
      team: copyOfTeam
    })
  }

  handleSearch = (event) => {
    let text = event.target.value
    this.setState({
      searchTerm: text
    })
  }

  render() {
    let filteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <h1>My Team:</h1>
        <PokemonList
          pokemonArray={this.state.team}
          clickPokemon={this.handleRemovePokemon}
          onScout={this.handleScout}
        />
        {this.state.currentPokemon ? <Stats
          pokemonToRender={this.state.currentPokemon}
        /> : null }
        <br />
        <h1>Pokemon:</h1>
        <Searchbar onSearch={this.handleSearch}/>
        <PokemonList
          pokemonArray={filteredPokemon}
          clickPokemon={this.handleAddPokemon}
          onScout={this.handleScout}
        />
      </div>
    );
  }
}

export default App;
