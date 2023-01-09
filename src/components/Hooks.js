import React, { useEffect, useState } from 'react'

function Hooks() {
    const intialVl=0
    const [count,setCount]=useState(intialVl);
    useEffect(()=>{
        document.title=`You Clicked ${count} times`
        alert("how are you")
        // alert("how are you")
    })
  return (
    <div>
        Count:  {count}
      <button style={{margin:"auto"}} onClick={()=>{setCount (intialVl)}}><b>Reset</b></button>
      <button style={{margin:"auto"}} onClick={()=>{setCount (count+1)}}><b>Increment</b></button>
      <button style={{margin:"auto"}} onClick={()=>{setCount (count-1)}}><b>Decrement</b></button>
    </div>
  )
}

export default Hooks
