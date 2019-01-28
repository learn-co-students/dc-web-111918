import React from 'react'

//function component
const Comment = (props) => {
  return <div className='comment'> {props.comment.comment} -- written by: {props.comment.author} </div>
}

// class Comment extends React.Component {
//   render(){
//     return (
//       <div className='comment'>This is a comment
//       </div>)
//   }
// }

export default Comment
