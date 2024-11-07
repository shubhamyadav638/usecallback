import React, { useCallback, useMemo, useState } from 'react'
import User from './user'

function App() {
  const [count,setCount]=useState(0)

  function d(){
    console.log("function call")
    
  }
  
   
//using usememo to stop re-render component to pass props
  //  const r= useMemo(()=>{
  //   return d()
  //  },[])


  //using useCallback to stop re-render component to pass props
  const r= useCallback(()=>{
    return d()
   },[])
  
  return (
    <div>
      <User r={r }/>
      <h1>usecallback</h1>
      <h2>{count}</h2>

      <button onClick={()=>setCount(prev=> prev +1)}>click</button>
    </div>
  )
}

export default App
