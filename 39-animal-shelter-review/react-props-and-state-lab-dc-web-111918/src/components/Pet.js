import React from 'react'

class Pet extends React.Component {
  render() {
    // console.log(this.props.onAdoptPet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petInfo.gender === 'female' ? '♀' : '♂'}
            {this.props.petInfo.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age}</p>
            <p>Weight: {this.props.petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            this.props.petInfo.isAdopted ?
            <button className="ui disabled button">Already adopted</button> :
            <button onClick={()=>{this.props.onAdoptPet(this.props.petInfo)}} className="ui primary button"
            >Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}
//if the pet isAdopted === true, show Already adopted
//else if the pet isAdopted === false, show Adopt pet

export default Pet
