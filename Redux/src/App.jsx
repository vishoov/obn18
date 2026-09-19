
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, incrementByAmount} from "./features/counter/counterSlice";
import { useState } from "react";


function App() {

  //this is for reading the value from the store 
  const count = useSelector((state)=>state.counter.value);

  // this is for dispatching the action to the store 
  const dispatch = useDispatch();

  //value for increment by amount
  const [incrementValue, setIncrementValue] = useState(0);

  return (
    <>
    <h1>Redux</h1>
    {count}
    <button onClick = {
      ()=> dispatch(increment())
    }>Increment</button>
    <br />
      <button onClick = {
      ()=> dispatch(decrement())
    }>Decrement</button>
    
    <br />

    <input type='number' 
    onChange={(e)=>setIncrementValue(Number(e.target.value))}
    placholder="Enter a number to increment" 
    id="incrementInput" />



    <button onClick = {  ()=> dispatch(incrementByAmount(incrementValue)) } >Increment by {incrementValue}</button>
    


    </>
  )
}

export default App
