import React, { useState } from 'react';

function Likes({ upvotes, downvotes }) {
  const [upVotes, setUpVotes] = useState(upvotes)
  const [downVotes, setDownVotes] = useState(downvotes)

  function handleUpVote() {
    setUpVotes(upVotes + 1);
  }

  function handleDownVote() {
    setDownVotes(downVotes + 1);
  }


  return (
    <div className="likes">
       <button value={upVotes} onClick={handleUpVote}>{upVotes + ' 👍🏼'}</button>
       <button value={downVotes} onClick={handleDownVote}>{downVotes + ' 👎'}</button>
    </div>
  )
}

export default Likes;