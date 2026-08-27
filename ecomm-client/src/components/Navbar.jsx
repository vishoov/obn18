import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shopAll', label: 'Shop All' },
  { to: '/collection', label: "Men's Collection" },
]

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        obn<span>18</span>
      </NavLink>

      <div className="navbar-links">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            {label}
          </NavLink>
        ))}

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }
        >
          Log in
        </NavLink>

        <NavLink to="/signup" className="navbar-cta">
          Sign up
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
