import React from 'react'

const Searchbar = (props) => {
  return (
    <input onChange={props.onSearch} className="searchbar" />
  )
}

export default Searchbar
