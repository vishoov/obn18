import React from 'react'
import { Link } from 'react-router'
import './Page.css'
import './StarElement.css'

const StarElement = () => {
  return (
    <div className="page not-found">
      <p className="not-found-code">404</p>
      <h1>This page went shopping elsewhere</h1>
      <p className="not-found-copy">
        The link you followed doesn&apos;t exist — or it moved.
      </p>
      <div className="not-found-actions">
        <Link to="/" className="link-btn">
          Go Home
        </Link>
        <Link to="/shopAll" className="link-btn ghost">
          Shop All
        </Link>
      </div>
    </div>
  )
}

export default StarElement
