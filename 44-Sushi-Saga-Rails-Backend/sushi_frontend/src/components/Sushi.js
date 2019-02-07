import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  handleClickASushi = () => {
    if(this.props.balance > this.props.sushi.price){//not enough money
      this.setState({
        eaten: true
      })
      this.props.onEatSushi(this.props.sushi.price)
    }else{
      alert('you broke')
    }
  }

  render(){
    const {name, img_url, price} = this.props.sushi

    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClickASushi}>
          {
            /* Tell me if this sushi has been eaten! */
            this.state.eaten ?
              null
            :
              <img src={img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  }
}

export default Sushi
