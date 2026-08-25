import { useState } from 'react';

const PropDrilling = () => {

    const [user, setUser] = useState({
        name:"Anmol",
        role:"developer"
    })

  return (
    <div className="bg-slate-100 p-6">
        <Dashboard user={user} setUser={setUser} />
    </div>
  )
}

//this is a seperate file Dashboard.jsx

function Dashboard({user, setUser}){
    return <Sidebar user={user} setUser={setUser} />
}


function Sidebar({user, setUser}){
    return <UserProfile user={user} setUser={setUser} />
}

function UserProfile({user, setUser}){
    return (
        <div className="bg-white p-4">
            <h3 className="text-slate-900">{user.name}</h3>
            <p className="text-slate-500">{user.role}</p>

            <button
                className="bg-violet-600 text-white p-2"
                onClick ={()=>{
                    setUser((currentUser)=>({
                        ...currentUser, 
                        role:"Senior Developer"
                    }))
                }}
            >
                Promote
            </button>
        </div>
    )
}



export default PropDrilling;
