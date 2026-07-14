import {useState, useRef} from 'react';

const RefClock = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setisRunning] = useState(false);
    const intervalId = useRef(null)
    const handleStart =()=>{
        if(isRunning) return;
        setisRunning(true);
        intervalId.current= setInterval(()=>{   
            setSeconds((prev)=>prev+1);
        }, 1000)
    }

    const handleStop= ()=>{
        clearInterval(intervalId.current);
        setisRunning(false);
    }

  return (
    <div>

        <h1>{seconds}s</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default RefClock