import React, { useEffect } from 'react'

const UseEffectComp = () => {
  // Just when this component is mounted 
  // UI built or rendered


// useEffect is a react hook that helps us in executing any code as a side effect in react (or simply put it helps us execute any code asynchronously with the UI building process)
  useEffect(()=>{

    fetch('https://potterapi-fedeperin.vercel.app/en/books')
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.error("Error fetching data: ", err);
    })

    const timer = setInterval(()=>{console.log("Hello")}, 1000)
    return ()=>{
      clearInterval(timer)
    }

  }, [])


  return (
    <div>
      <h1>Hello guys my name is useEffect</h1>
      <h2> UI Rendered at {Date.now()}</h2>
    </div>
  )
}

export default UseEffectComp;


// Hooks are javascript functions that interface directly with the React's main brain (react fiber reconciler). these functions allow the components to subscrive to the React state tree and lifecycle phases. 


// useEffect: is a hook used for running side effects (API calls, DOM Manipulation, subscriptions)

// useEffect(()=>{...logic})

// ()=>{} -> the effect callback, react runs this after the browser renders the screen.

//[filter] the dependancy array, it tells react: " only destroy and re call this function if any of the values inside the dependancy array change"