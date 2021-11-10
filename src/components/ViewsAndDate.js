import React from 'react';

function ViewsAndDate({ views, uploadDate }){
  return (
    <div className="row">
      <p>{views + ' Views '}</p>
      <p>{'| Uploaded '+ uploadDate}</p>
    </div>
  )
}

export default ViewsAndDate;