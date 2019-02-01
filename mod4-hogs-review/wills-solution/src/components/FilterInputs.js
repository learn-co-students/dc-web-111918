import React from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
class FilterInputs extends React.Component {



    render(){
        return(
            <div className="ui grid container">
                <div className="ui three wide column center">
                    <label htmlFor="filterName">Filter by Name: </label>
                    <input
                        name="filterName"
                        onChange={(e) => this.props.setAppState("filterName", e.target.value)}
                        value ={this.props.filterName}
                    /> 
                </div>
                <div className="ui three wide column center">
                    <label htmlFor="weight">Weight in Friges: </label>
                    <input
                        type="range"
                        min={0}
                        max={6}
                        name="weight"
                        onChange={(e) => this.props.setAppState("filterWeight", e.target.value)}
                        value = {this.props.filterWeight}   
                    /> 
                </div>
                <div className="ui three wide column">
                    <label htmlFor="Greased"> Greased: </label>
                    <input
                        name="Greased"
                        type='radio'
                        checked={this.props.filterGreased}
                        onClick={() => this.props.setAppState("filterGreased", !this.props.filterGreased)}
                    /> 
                </div>
                <div className="ui three wide column">
                    <label htmlFor="sortByName"> Sort By Name: </label>
                    <input
                        name="sortByName"
                        type='radio'
                        checked={this.props.sortBy === 'name'? true: false}
                        onClick={() => this.props.setAppState("sortBy", "name")}
                    /> 
                </div>
                <div className="ui three wide column">
                    <label htmlFor="sortByWeight"> Sort By Weight: </label>
                    <input
                        name="sortByWeight"
                        type='radio'
                        checked={this.props.sortBy === "weight" ? true : false}
                        onClick={() => this.props.setAppState("sortBy", "weight")}
                    /> 
                </div>



                
            </div>



        )
    }
}

export default FilterInputs 