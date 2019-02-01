import React from 'react'

const Stats = (props) => {
  return (
    <div className="card details">
      <div>
        <div className="row">{props.pokemonToRender.name}</div>
        <div className="row">
          <div><img alt="" src={props.pokemonToRender.sprites.front_default} /></div>
          {props.pokemonToRender.stats.map(stat=>(
            <div key={stat.stat.name} className="block">{stat.stat.name}: {stat.base_stat}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
