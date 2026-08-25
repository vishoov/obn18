import { useState } from "react"
import { CountContext } from "../CountContext"





// Lifting the state 
// 1. if two components reflect the same value, that value should live in one place : thta is their common parent 
// 2. their parent OWNS the state (useState) this lives inside the parent 
  // - values go downwards through props
  // update functions downwards as callback props so the children can request changes without owning the state themselves 
//we built controlled components-> meaning the displayed values come from props, without owning thmm inside the component 


const CounterWrapper = ({children}) => {
  const [count, setCount]= useState(2);

  const increment = () => setCount((c)=>c+1)
  const decrement = ()=> setCount((c)=>c-1)


  const value = {count, increment, decrement}

  return (
    <>
  <CountContext.Provider value={value}>
    {children}
  </CountContext.Provider>



      {/* <CounterDisplay current={count}  /> */}
    {/* <CounterControls onDecrement={decrement} onIncrement={increment} /> */}
    </>
  )
}

export default CounterWrapper