import { useState, useEffect } from 'react';


const Timer = () =>{

    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () =>{

        if(isRunning) return;
 
        const id = setInterval(()=>{
            setSeconds((prev)=>prev+1)
        }, 1000)
        setIntervalId(id);
        setIsRunning(true);
    }

    const handleStop= ()=>{
        clearInterval(intervalId);
        setIsRunning(false);
    }

    const handleReset=()=>{
        clearInterval(intervalId);
        setIsRunning(false);
        setSeconds(0)
    }

    return (
        <div>
            <h1>{seconds}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Timer;

// as soon as the page loads, the timer is set to 0
// and start running 
// 2 second 1 value up 


// 00:00:00 -> stopwatch
// muktiple clicks? 