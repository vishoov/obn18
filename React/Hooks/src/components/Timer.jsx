import { useState, useEffect } from 'react';


const Timer = () =>{

    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
<<<<<<< HEAD
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () =>{

        if(isRunning) return;
 
=======

    const handleStart = () =>{

>>>>>>> e6511cc (hooks)
        const id = setInterval(()=>{
            setSeconds((prev)=>prev+1)
        }, 1000)
        setIntervalId(id);
<<<<<<< HEAD
        setIsRunning(true);
=======
>>>>>>> e6511cc (hooks)
    }

    const handleStop= ()=>{
        clearInterval(intervalId);
<<<<<<< HEAD
        setIsRunning(false);
=======
>>>>>>> e6511cc (hooks)
    }

    const handleReset=()=>{
        clearInterval(intervalId);
<<<<<<< HEAD
        setIsRunning(false);
=======
>>>>>>> e6511cc (hooks)
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
<<<<<<< HEAD
// 2 second 1 value up 


// 00:00:00 -> stopwatch
// muktiple clicks? 
=======
// 2 second 1 value up 
>>>>>>> e6511cc (hooks)
