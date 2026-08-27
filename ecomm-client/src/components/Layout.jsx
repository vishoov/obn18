import React from 'react'
import { NavLink, Outlet } from 'react-router'
import './Page.css'
import './Layout.css'

const collections = [{ to: 'mens-collection', label: "Men's Collection" }]

const Layout = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Collections</h1>
        <span className="page-subtitle">Curated edits, refreshed often</span>
      </div>

      <nav className="collection-nav">
        {collections.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? 'collection-pill active' : 'collection-pill'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
