import { useState, useRef } from "react"

const Controlled = () => {
  // Controlled Component
  const [controlledName, setControlledName] = useState("");

  // UNCONTROLLED
  const uncontrolledRef = useRef(null);

  const handleUncontrolled = (e)=>{
    e.preventDefault();
    console.log(uncontrolledRef)
    alert(`Uncontrolled says: Hello ${uncontrolledRef.current.value}`)
  }

  return (
    <div>
      <h1>{controlledName}</h1>
    <input 
    onChange={(e)=>setControlledName(e.target.value)}

    />

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

    <form onSubmit={handleUncontrolled}>
      <input 
      text='text'
      defaultValue=""
      ref={uncontrolledRef}
      />
      <button type="submit" >Submit</button>
    </form>


    </div>
  )
}

export default Controlled