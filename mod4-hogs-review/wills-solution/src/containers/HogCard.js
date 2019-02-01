import React, { Component } from 'react';
import {HogDetail} from '../components/HogDetail';
import {HogNamePlate} from '../components/HogNamePlate';

class HogCard extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            detail: false
        }
    }

    handleClick(){
        // test click first: console.log('click')
        this.setState({
            detail: !this.state.detail
         
        })

    }

    render(){
        const {hogObj} = this.props
        return(
            // static first: <div>Hog Card</div>
            <div 
            onClick={()=> this.handleClick()}
            className="ui four wide column"
            >

                {this.state.detail ? 
    
                    <HogDetail 
                        hogObj={hogObj}
                        makeBacon={this.props.makeBacon}
                    />
                : 
                    <HogNamePlate hogObj={hogObj}/> 
                }

            </div>

        )
    }

}

export default HogCard