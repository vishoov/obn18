import React from 'react'
import "./Settings.css"
import { useState } from 'react';
import { useAuth } from '../auth/AuthContext';


const Settings = () => {

  const { user, updateUser } = useAuth();





  const [formData, setFormData] = useState({
    name:'',
    email:'',
    age:''
  });

  const [status, setStatus] = useState({
    loading:false,
    error:null,
    success:false
  });


  
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  
  async function handleSubmit(e){
    e.preventDefault();
    
    setStatus({
      loading:true,
      error:null,
      success:false
    })

    const id = user._id;


    const token = localStorage.getItem('token');
    console.log(token);

      try{

        const response = await fetch(`http://localhost:3000/users/updateUser/${id}`, {
          method:"PUT",
          //this will tell browser to send the token cookie
          credentials:'include',
          headers:{
            'Content-Type':"application/json",
            // "Authorization":`Bearer ${token}`


          },
          body:JSON.stringify(formData)
        });

        if(!response.ok){
          const error = await response.json();
          throw new Error(error.message || "Failed to update user");
        }


        setStatus({
          loading:false, 
          error:null, 
          success:true
        });

        updateUser(user);


        setFormData({
          name:'',
          age:'',
          email:''
        })



      }
      catch(err){
        setStatus({
          loading:false,
          error:err.message,
          success:false
        })
      }


}

  return (
    <div className='outer'>

    <h3 className='heading'>
      Update Profile
    </h3>

    {status.error && (
      <div className='alert'>
          {status.error}
        </div>
    )}
{status.success && (
      <div className='success'>
          User updated Successfully
        </div>
    )}

      <form onSubmit ={handleSubmit}>
        <div className="formGroup">
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Please Enter your name'
            value={formData.name}
            onChange={handleChange}
            className='form-input'

            />
        </div>
        <div className="formGroup">
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Please Enter your email'
            value={formData.email}
            onChange={handleChange}
            className='form-input'

            />
        </div>

        <div className="formGroup">
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            id='age'
            name='age'
            placeholder='Please Enter your age'
            value={formData.age}
            onChange={handleChange}
            className='form-input'

            />
        </div>

      <button
        type='submit'
        disabled={status.loading}
        className='submit-button'
        >
          
            {status.loading==true ? "Updating" : "Save Changes"}



        </button>



      </form>

    </div>
  )
}

export default Settings