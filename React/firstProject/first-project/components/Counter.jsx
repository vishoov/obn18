import { useState } from "react";


const Counter = ()=>{
    const [count, setCount] = useState(0);


    const user = {
        name:"Nitin", 
        degree:"Btech"
    }

    return (
        <>
        <h1>{user.name} is a {user.degree} guy</h1>
        <p>{count}</p>
        <button onClick = {()=>setCount(count+1)}>Click me</button>    
        </>
    )
}


export default Counter;

// export -> this file will provide something 
// default -> only one thing it will provide i.e. Counter 

// classname -> className 
// onclick -> onClick 
