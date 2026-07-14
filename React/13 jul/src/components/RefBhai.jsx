import { useRef, useState } from 'react'

const RefBhai = () => {
    const refContainer = useRef(null);
    const [name, setName] = useState("roopansh")
    const handleClick = ()=>{
        //focus on the input 
        refContainer.current.focus();
    }


  return (
    <div>
        <h1>{name}</h1>
        <input onChange={(e)=>setName(e.target.value)} />

        <br/>
        <br/>
        <br/>
        <br/>


        
        <input ref={refContainer} type='text'/>
        <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default RefBhai