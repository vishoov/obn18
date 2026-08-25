import { useContext } from "react";
import { CountContext } from "../CountContext";


const CounterControls = () => {
    const { increment, decrement} = useContext(CountContext)
    return (
      <div> 
        <button className="p-5 text-3xl bg-blue-500 " onClick = {decrement}>-</button>
        <button className="p-5 text-3xl bg-white " onClick = {increment}>+</button>
        </div>
    )
  }


  export default CounterControls;