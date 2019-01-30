import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    //this.props.onAdoptPet
    return <div className="ui cards">
      {
        this.props.listOfPetsToRender.map(
          petObj => <Pet
            petInfo={petObj}
            key={petObj.id}
            onAdoptPet={this.props.onAdoptPet}
          />
        )
      }
    </div>
  }
}

export default PetBrowser
