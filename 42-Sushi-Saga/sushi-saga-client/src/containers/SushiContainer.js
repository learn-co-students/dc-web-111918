import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.sushiList.map(sushi => <Sushi
          sushi={sushi}
          onEatSushi={props.onEatSushi}
          balance={props.balance}
          key={sushi.id}
          />)}
        <MoreButton onClickMore={props.onClickMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
