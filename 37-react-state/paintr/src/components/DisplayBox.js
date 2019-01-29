import React, {Component} from 'react'

class DisplayBox extends Component {
  constructor(){
    super()
    console.log('I exist')
  }
  
  render(){
    let {title, image, artist: {name}, dimensions: {width, height}} = this.props.portraitToDisplay
    return (
      <div className="ui card">
          <div>
            <img alt={title} src={image} />
          </div>
          <p>{title} by {name}</p>
          <p>{width}in. x {height}in.</p>
      </div>
    )
  }
}

export default DisplayBox
