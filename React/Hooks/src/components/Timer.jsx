import { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    
    if (intervalId) return;

    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    setIntervalId(id);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h1>{seconds}</h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;