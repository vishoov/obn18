import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Welcome to my first react project</h1>
      <p>This is a project i am building for the first time</p>
    <p>{count}</p>
      <button onClick = {()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App