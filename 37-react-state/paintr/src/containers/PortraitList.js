import React from 'react'
import Portrait from '../components/Portrait'
import portraitsData from '../data/paintings'

const PortraitList = (props) => {

  let filteredPainting =  portraitsData.filter(portrait => portrait.title.includes(props.filterTerm))

  return (
    <div>
      {filteredPainting.map(paintingObj =>
        <Portrait
          painting={paintingObj}
          key={paintingObj.id}
          changePortrait={props.changePortrait}
        />
      )}
    </div>
  )
}

export default PortraitList
