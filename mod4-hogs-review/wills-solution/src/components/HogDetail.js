import React from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

export const HogDetail = ({ hogObj, makeBacon }) => {
    // debugger
    return(
        <div>
            <h1>{ hogObj.name }</h1>
            
            <h3>Specialty: { hogObj.specialty }</h3>
            
            <p>{weight}: { hogObj[weight] }</p>

            <p>Greased: { `${hogObj.greased}` }</p>

            <button
                onClick={() => makeBacon(hogObj)}
            >
                Make Bacon
            </button>
           
       
        </div>
    )

}

