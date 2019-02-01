import React from 'react'

// hogData

// {
//     name: 'Porkchop',
//     specialty: 'Making friends',
//     greased: true,
//     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 1.6,
//     'highest medal achieved': 'silver'
//   }

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
class HogCard extends React.Component{
    constructor(){
        super()
        this.state={
            showDetails:false
        }
    }
    
    
    // state={
    //     showDetails: false
    // }

handleClick= () =>{
    this.setState({
        //what it to become show details true or false if it's already true
        showDetails: !this.state.showDetails
    })

}

    render(){
    return(
        <div>
            <h2>{this.props.hogData.name}</h2>
            <img 
            onClick={this.handleClick}
                alt={this.props.hogData.name} 
                src={require(`../hog-imgs/${helperFunction(this.props)}`)}    
            />

            {/* // we need some kind of condition to diplay this stuff */}
            {this.state.showDetails ?
                    <div>
                        <h4>Specialty: {this.props.hogData.specialty} </h4>
                        <p>Greased: {`${this.props.hogData.greased}`}</p>
                        <p>{weight}: {this.props.hogData[weight]}</p>
                       <p>Highest Medal achieved: { this.props.hogData['highest medal achieved'] }</p> 
                    </div> 
                : 
                    null 
            }
            

        </div>
    )
    }
}

// export const CanYouSeeTHIS = () =>{
//     return "yes I can"
// }

export default HogCard



const helperFunction = (bob)=>{

//take name
let name = bob.hogData.name
//downcase 
let smallsName = name.toLowerCase()
// whereever there is a space replace it with a _
// smallsName = "my lovely hog" 

let dashSmalls= smallsName.split(" ").join("_")
// smallsName.replace(/\s/g, "_")

// smallsName = my_lovely_hog
// add .jpg
return dashSmalls + ".jpg"

}