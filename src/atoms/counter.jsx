

import React from "react";
import {useState} from 'react'
import "../styles/counter.css"



function Counter() {
  const [count, setCount] = useState(() => {
    return 0
  })

  function decrementCount() {
    if (count >= 1) {
      setCount(prevCount => prevCount - 1)
    }
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
      <div className='Counter-quiz'>
        <h1 className='counter-text'>Te gustan las mariposas?<span className="number-count">{count}</span></h1>
        <button className='decrement' onClick={decrementCount}>No</button>
        <button className='increment' onClick={incrementCount}>Si</button>
      </div>
  )
}


export default Counter;