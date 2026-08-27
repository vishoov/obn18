import React from 'react'
import { NavLink } from 'react-router'
import './Footer.css'

const columns = [
  {
    title: 'Shop',
    links: [
      { to: '/shopAll', label: 'Shop All' },
      { to: '/collection', label: 'Collections' },
      { to: '/collection/mens-collection', label: "Men's Denims" },
    ],
  },
  {
    title: 'Account',
    links: [
      { to: '/signup', label: 'Sign up' },
      { to: '/signup', label: 'Order status' },
      { to: '/signup', label: 'Wishlist' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/', label: 'Shipping & returns' },
      { to: '/', label: 'Size guide' },
      { to: '/', label: 'Contact us' },
    ],
  },
]

const socials = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://twitter.com', label: 'Twitter' },
  { href: 'https://youtube.com', label: 'YouTube' },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <NavLink to="/" className="footer-logo">
            obn<span>18</span>
          </NavLink>
          <p className="footer-tagline">
            Denim and essentials, built to outlast the season.
          </p>
          <div className="footer-socials">
            {socials.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {columns.map(({ title, links }) => (
          <div key={title} className="footer-col">
            <h3 className="footer-col-title">{title}</h3>
            <ul className="footer-list">
              {links.map(({ to, label }) => (
                <li key={label}>
                  <NavLink to={to} className="footer-link">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} obn18. All rights reserved.</span>
        <div className="footer-legal">
          <NavLink to="/" className="footer-link">
            Privacy
          </NavLink>
          <NavLink to="/" className="footer-link">
            Terms
          </NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
