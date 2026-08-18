import React from 'react'

import {useState} from 'react';
import './SignupPage.css';

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
    <div className='signup-wrap'>
      <div className='signup-card'>
        <h1 className='signup-title'>Create an Account</h1>
        <p className='signup-sub'>Join obn18 and start shopping in seconds.</p>

        {message && <p className='signup-alert success'>{message}</p>}
        {error && <p className='signup-alert error'>{error}</p>}

        <form className='signup-form' onSubmit={handleSubmit}>
            {/* name */}
            <div className='signup-field'>
            <label htmlFor='name'>Name</label>
            <input
            id='name'
            type='text'
            name='name'
            placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)}
            />
            </div>

            {/* email */}
        <div className='signup-field'>
            <label htmlFor='email'>Email</label>
            <input
            id='email'
            type='text'
            placeholder='Enter your email'
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

        <div className='signup-row'>
            {/* age */}
            <div className='signup-field'>
                <label htmlFor='age'>Age</label>
                <input
                    id='age'
                    type='number'
                    placeholder='Enter your Age'
                    onChange={(e)=>setAge(e.target.value)}
                    />
            </div>

            {/* role */}
            <div className='signup-field'>
                <label htmlFor='role'>Role</label>
                <select id='role' onChange={(e)=>setRole(e.target.value)}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="SuperAdmin">SuperAdmin</option>
                </select>
            </div>
        </div>

            {/* password */}
            <div className='signup-field'>
                <label htmlFor='password'>Password</label>
                <input
                id='password'
                type="password"
                placeholder='Enter your password'
                onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>

            <button className='signup-submit' type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage