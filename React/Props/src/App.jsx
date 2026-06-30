// app -> data -> UI 
import { useState } from 'react';
import UseEffectComp from "./components/UseEffectComp";

function App(){
  const [visible, setVisible] = useState(true);
  async function getData(){
  const data = await fetch('https://potterapi-fedeperin.vercel.app/en/books')
  const books = await data.json();

    console.log(books)

  }

  const books = getData();  

  // return (
  //   <div style={{ }}>
  //     <h1>Harry Potter Movies</h1>
  //     {books.map((ele)=><div>{ele.title} </div>)}
  //     </div>
  // )


  return (
    <>
    {visible ? <UseEffectComp/>:null}
    <button onClick={()=>setVisible(!visible)} > Click Me</button>
    </>
  )
}


export default App;