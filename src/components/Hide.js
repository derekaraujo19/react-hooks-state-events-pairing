
function Hide ({ handleHide, comments }) {
  // console.log(comments)
  const count = comments.length;
  // console.log(count)

  return (
    <button onClick={handleHide}>{(count > 0) ? 'Hide Comments' : 'Show Comments'}</button>
  )
}

export default Hide;