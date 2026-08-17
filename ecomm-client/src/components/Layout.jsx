import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <h1>This is the Collections page</h1>
        <Outlet />
    </div>
  )
}

export default Layout