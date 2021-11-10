import React, { useState } from 'react';
import Hide from "./Hide";
import CommentHeader from "./CommentHeader";
import Comment from "./Comment";

function Comments({ COMMENTS }) {
  const [comments, setComments] = useState(COMMENTS)
  // console.log(comments);
  function handleHide() {
    if (comments.length > 0) {
      setComments([]);
    } else {
      setComments(COMMENTS)
    }
  }

  return (
    <div>
      <Hide handleHide={handleHide} comments={comments}/>
      <CommentHeader comments={comments} />
      {comments.map((comment) => (
        <Comment key={comment.id} user={comment.user} comment={comment.comment} />
      ))}
    </div>
  )
}

export default Comments;