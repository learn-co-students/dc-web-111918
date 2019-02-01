import React from 'react'
// import {imgUrl} from '../_helperFunctions'

export const HogNamePlate = ({hogObj}) =>{
    return (

        <div>
            <h1> { hogObj.name } </h1>
            <img src={ imgSrc(hogObj.name) } alt="Hog"/>
        </div>
    

    )
}


const imgSrc = (hogName) => require("../hog-imgs/" + hogName.toLowerCase().replace(/\s/gm, '_')+ '.jpg')

