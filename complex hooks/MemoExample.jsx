import React, { useState } from 'react'
import { useMemo } from 'react';
const MemoExample = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');



    const expensiveValue = useMemo(()=>{
        console.log("starting....");
        let result = 0;
        for(let i=0; i<10000000; i++){
            result+=i;
        }
        return result;
    })

  return (
    <div>
        <p>Count: {count}</p>
        <input value = {name} onChange={(e)=> setName(e.target.value)} />
        <p>Expensive : {espensiveValue}</p>
        <button onClick={()=>setCount(count+1)} >

    </button>

    

    </div>
  )
}

export default MemoExample