import {useState} from 'react'

const App = () => {
    const [name, setName] = useState("hritik")

  return (
    <div style={{display:'flex', flexDirection:"column", height:"60vh", justifyContent:'space-between', alignItems:'center', padding:"20px"}}>
        <Nav name={name}/>
        <Sidebar name={name}/>
        <Main name={name} nameChange={setName}/>
    </div>
  )
}

function Nav({name}){
    return (
        <nav style={{padding:'10px', backgroundColor:'grey', color:'white', justifySelf:'flex-start'}}>
            <b>Navbar: </b> Welcome, {name}
        </nav>
    )
}


function Sidebar({name}){
    return (
        <div>
            <p>this is the sidebar</p>
            <p>{name}</p>
        </div>
    )
}


function Main({name, nameChange}){
    return (
        <main>
            <h2>Welcome {name}</h2>
            <label>Enter Your Name</label>
            <input
            type="text"
            placeholder="Type Here..."
            value={name}
            onChange={(e)=>nameChange(e.target.value)}
            ></input>
            <p>{name}</p>

            <Nav name={name} />
        </main>
    )
}

export default App