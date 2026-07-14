
import { useState } from 'react'
import Display from './components/Controlled';
import Controlled from './components/Controlled';
import RefBhai from './components/RefBhai';
import RefClock from './components/RefClock';
const App = () => {

  const [counter, setCounter] = useState(0);

  const handleClick = ()=>{
    setCounter(prev=>prev+2); //prev=2 
    setCounter(prev=>prev+2); //prev=4
    setCounter(prev=>prev+2);
    setCounter(prev=>prev+2);
    setCounter(prev=>prev+2);


    // setCounter(counter+1)
    // this is relying on current state to compute a new one 

    // when you use a callback inside update
    // setCounter(prev=>prev+1)
    // prev will always refer to most recently queued state value, instead of the stale closure value 
    // react will process these functions in order, where each one recieveds the result of previous update
  }

  return (
    <div>
{/* 
      <h1>Counter {counter}</h1>
      <button
      onClick={handleClick}
      >
        Increment
      </button>

      <button
      
      onClick={()=>setCounter(counter-1)}
      >
        Decrement
      </button> */}

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    {/* <Controlled /> */}

    {/* <RefBhai /> */}

    <RefClock />


    </div>
  )
}

export default App