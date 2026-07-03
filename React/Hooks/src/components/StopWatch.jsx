import { useState, useEffect } from "react";




const Stopwatch = ()=>{
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);
  

  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  const hours = String(h).padStart(2, "0");
  const minutes = String(m).padStart(2, "0");
  const seconds = String(s).padStart(2, "0");

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
    return (
        <>
            <h1>
                <span className="hour">{hours}:</span>
                <span className="minutes">{minutes}:</span>
                <span className="seconds">{seconds}</span>
            </h1>
            <button className="Start" style={{margin: "15px"}} onClick={handleStart}>Start</button>
            <button className="Stop" style={{margin: "15px"}} onClick={handleStop}>Stop</button>
            <button className="Reset" style={{margin: "15px"}} onClick={handleReset}>Reset</button>
        </>
    )

}

export default Stopwatch;