import React from 'react'
import { useAuth } from '../auth/AuthContext'

const Dashboard = () => {
    const {user} = useAuth();
    console.log(user);
  return (
    <div>
        <p className='text-white'>{user.name}</p>
    </div>
  )
}

export default Dashboard