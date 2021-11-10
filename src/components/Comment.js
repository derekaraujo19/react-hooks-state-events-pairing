

function Comment({ user, comment }) {
  return (
    <div>
      <p style={{ 'font-weight': 'bold' }}>{user}</p>
      <p>{comment}</p>
    </div>
  )
}

export default Comment;