import React from 'react'

const PokemonCard = (props) => {
  return (
    <div
      className="pokemon card"
      onClick={()=>{props.clickPokemon(props.pokemonObj)}}
    >
      <h4>{props.pokemonObj.name}</h4>
      <button onClick={
        (event)=>{
          event.stopPropagation()
          props.onScout(props.pokemonObj.url)
        }
    }>Stats</button>
    </div>
  )
}

export default PokemonCard
