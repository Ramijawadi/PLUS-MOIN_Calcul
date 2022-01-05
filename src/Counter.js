import React, { useState } from 'react'
import './counter.css'
const Counter = () => {

    const [counter, setCounter]= useState(0);

    return (
  <div className='app'>

    <h2> Notre petite calculatrice</h2>
        <h1 className='cc'>{counter}</h1>
        <div>
            <button className='cl'  onClick={()=>setCounter(counter-1)}>Moin</button>
            <button  className='cl' onClick={()=>setCounter(counter+1)}>Plus</button>
           


        </div>
        </div>
    )
}

export default Counter
