import React, { Component } from 'react' 
// import  { CanYouSeeTHIS } from '../components/HogCard'
import  HogCard from '../components/HogCard'


class HogsContainer extends Component {

    render(){
       
        return(
            <div>
                <p>Hogs Container </p>
               {this.props.ourHogs.map((hogObj, index) => {return <HogCard hogData={hogObj} key={index} /> } ) }

            </div>
        )
    }

}


export default HogsContainer
