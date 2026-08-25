import { useContext } from "react"
import { CountContext } from "../CountContext"


const CounterDisplay = () =>{
    const { count }= useContext(CountContext)
    return (
        <h2> Current count: {count} </h2> 
    )
  }

  
export default CounterDisplay