import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
import { Link } from 'react-router'
const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shopAll', label: 'Shop All' },
  { to: '/collection/mens-collection', label: "Men's" },
]

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        obn<span>18</span>
      </NavLink>

      <div className="navbar-links">
        {/* {links.map(({ to, label, end }) => (
          <Link
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            {label}
            </Link> */}
            {/* ))} */}
          <NavLink 
          to="/shopAll"
          className={({isActive})=>(isActive?"navbar-link active":"navbar-link")}
          >Shop All</NavLink>
          <NavLink
          to='/collection'
          className={({isActive})=>( (isActive ? "navbar-link active":"navbar-link"))}
          >Men's Collection</NavLink>

        <NavLink to="/signup" className="navbar-cta">
          Sign up
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
