import React from 'react'
import { useAuth } from '../auth/AuthContext'

const Dashboard = () => {
    const {user} = useAuth();
  return (
    <div>
        <p className='text-white'>{user.name}</p>
    </div>
  )
}

export default Dashboard