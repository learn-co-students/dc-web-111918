import React from 'react'

const Searchbar = (props) => {
  return (
    <input
      type="text"
      value={props.text}
      onChange={props.changeSearchTerm}/>
  )
}

//give searchbar the ability to change state

export default Searchbar
