import React, { memo } from 'react'

function User() {
    console.log("user c")
  return (
    <div>
     <h1>User component</h1> 
    </div>
  )
}

export default memo (User)
