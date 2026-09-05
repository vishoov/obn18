import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../auth/AuthContext'
import './Page.css'
import './Dashboard.css'

const formatDate = (value) => {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "—"
    : date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

const Dashboard = () => {
  const { user, logout } = useAuth();


// TODO add a useeffect to fetch fresh details of the user


  // the route can be hit directly before a login, so user may be null
  if (!user) {
    return (
      <div className="page">
        <div className="state">
          <h2>You're not signed in</h2>
          <p>Log in to see your profile details.</p>
          <Link className="link-btn" to="/login">Go to login</Link>
        </div>
      </div>
    )
  }

  const initials = (user.name || "?").trim().charAt(0).toUpperCase();

  return (
    <div className="page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p className="page-subtitle">Your account at a glance</p>
      </div>

      <section className="dash-hero">
        <div className="dash-avatar">{initials}</div>
        <div className="dash-hero-text">
          <h2>{user.name || "Unnamed user"}</h2>
          <p>{user.email}</p>
          <span className="dash-badge">{user.role || "User"}</span>
        </div>
      </section>

      <dl className="dash-grid">
        <div className="dash-card">
          <dt>Name</dt>
          <dd>{user.name || "—"}</dd>
        </div>
        <div className="dash-card">
          <dt>Email</dt>
          <dd>{user.email || "—"}</dd>
        </div>
        <div className="dash-card">
          <dt>Age</dt>
          <dd>{user.age ?? "—"}</dd>
        </div>
        <div className="dash-card">
          <dt>Role</dt>
          <dd>{user.role || "User"}</dd>
        </div>
        <div className="dash-card">
          <dt>Member since</dt>
          <dd>{formatDate(user.createdAt)}</dd>
        </div>
        <div className="dash-card">
          <dt>User ID</dt>
          <dd className="mono">{user._id || "—"}</dd>
        </div>
      </dl>

      <div className="dash-actions">
        <Link className="link-btn" to="/settings">Settings</Link>
        <button className="link-btn ghost" type="button" onClick={logout}>Log out</button>
      </div>
    </div>
  )
}

export default Dashboard
