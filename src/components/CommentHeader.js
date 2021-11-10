
function CommentHeader({ comments }) {
  const count = comments.length;
  return (
    <h2>{(count > 0) ? (count + ' Comments') : ''}</h2>
  )
}

export default CommentHeader;