import React from 'react'

const Portrait = (props) => {
    // console.log(props.painting)
    let {title, artist: {name}} = props.painting
      return (
        <div

        className="ui card"
        onClick={
          ()=>{props.changePortrait(props.painting)}
        }>


            <p>{title} by {name}</p>
        </div>
      )
}

// const Portrait = (props) => {
//   let {title, image, artist: {name}, dimensions: {width, height}} = props.painting
//   return (
//     <div className="ui card">
//         <div>
//           <img alt={title} src={image} />
//         </div>
//         <p>{title} by {name}</p>
//         <p>{width}in. x {height}in.</p>
//     </div>
//   )
// }

export default Portrait
