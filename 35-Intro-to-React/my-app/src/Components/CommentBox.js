//   src/CommentBox.js file
import React from 'react'
import Comment from './Comment'

function getComments(){
  return [
    {id: 1, comment: "hi", author: "Will"},
    {id: 2, comment: "SUP!!!!", author: "Bruno"},
    {id: 3, comment: "hey gurl", author: "Ann"}
  ]
}

//class component
class CommentBox extends React.Component {
  render(){
    return (
      <div className='comment-box' >
        This is a comment box
        {getComments().map(commentObj => (
          <Comment comment={commentObj} key={commentObj.id}/>)
        )}
      </div>
    )
  }
}

export default CommentBox
