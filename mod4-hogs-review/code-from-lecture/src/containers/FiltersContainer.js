import React, { Component } from 'react'



class FiltersContainer extends Component{
    
    render(){
        return(
            <div>
                <select onChange={(e)=> this.props.setSortState(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>

                <div >
                    <label htmlFor="greased"> Filter greased: </label>
                    <input
                        name="greased"
                        type='radio'
                        checked={this.props.butteredState}
                        onClick={this.props.setButteredState}
                    /> 
                    
                </div>
            </div>

        )
    }

}






export default FiltersContainer