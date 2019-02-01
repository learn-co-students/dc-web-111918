import React from 'react'
import PokemonCard from '../components/PokemonCard'

class PokemonList extends React.Component {

  render(){
    // console.log(this.props.pokemonArray)
    return (
      <div>
        {this.props.pokemonArray.map(pokemon =>
          <PokemonCard
            key={pokemon.name}
            pokemonObj={pokemon}
            clickPokemon={this.props.clickPokemon}
            onScout={this.props.onScout}
          />)}
      </div>
    )
  }
}

export default PokemonList
