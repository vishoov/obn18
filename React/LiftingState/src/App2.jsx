import Counter from "./components/counter";
import Display from "./components/Display";
import { useState } from 'react';

const App = () =>{

  const [count, setCount] = useState(0);
  return (
    <>
    <h1>Hello react</h1>

    <Counter count={count} handleCount={setCount} />
    <Display count={count}/>
    </>
  )
}

export default App;