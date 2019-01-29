import React from 'react'

const Navbar = (props) => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
        <a className="item" href={props.link} >
          <h2 className="ui header">
            <i className={`${props.icon} icon`}></i>
            <div className="content">{props.header}</div>
            <div className="sub header">{props.tagline}</div>
          </h2>
        </a>
    </div>
  )
}

export default Navbar
