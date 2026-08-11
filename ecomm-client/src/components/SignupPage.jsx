import React from 'react'

import {useState} from 'react';

const SignupPage = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("User");


    const [password, setPassword] = useState("");
    
    // functional states 
    const [message, setMessage] = useState("");
    const [error, setError]= useState("");

    async function sendData(object){
        console.log(object)
        try{
            const response = await fetch("http://localhost:3000/users/signup", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(object)

            });
            const result = await response.json();
            if(!response.ok){
                throw new Error(result.message)
            }

            setMessage(result.message);
        }
        catch(err){
            setError(err.message || "Unable to connect to the server")
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        // prevent's browser's default behaviour of form submission that is page reload 
        const object = {
            name, 
            age, 
            email,
            role, 
            password
        }

        sendData(object);


        // fetch


    }

  return (
    <div>
        <h1>Create an Account</h1>

        {message && <p style={{color:'green'}}>{message}</p>}
        {error && <p style={{color:"red"}}>{error}</p>}

        <form onSubmit={handleSubmit}>
            <div>
            {/* name */}
            <label htmlFor='name'>Name</label>
            <input 
            type='text'
            name='name'
            placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)}
            />
            </div>
            {/* email */}
        <div>
            <label>Email</label>
            <input
            type='text'
            placeholder='Enter your email'
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

            {/* age */}
            <div>
                <label>Age</label>
                <input 
                    type='number'
                    placeholder='Enter your Age'
                    onChange={(e)=>setAge(e.target.value)}
                    />
            </div>

            {/* role */}
<div>
    <label >Role</label>
    <select onChange={(e)=>setRole(e.target.value)}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="SuperAdmin">SuperAdmin</option>
    </select>
</div>
            {/* password */}
            <div>
                <label>
                    Password
                </label>

                <input 
                type="password"
                placeholder='Enter your password'
                onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>

            <button type='submit'>Sign up</button>
        </form>
    </div>
  )
}

export default SignupPage