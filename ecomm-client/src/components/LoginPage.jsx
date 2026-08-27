import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router'
import './Auth.css'

import { useAuth } from '../auth/AuthContext';

const API = 'http://localhost:3000/users'

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  // ui states
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})


  const {isAuthenticated, login} = useAuth();


// AuthContext
useEffect(()=>{
  if(isAuthenticated){
    navigate("/dashboard", {
      replace:true
    })
  }
}, [])

async function handleSubmit(e) {
    e.preventDefault()


  const status = login(email, password);

  console.log(status)

  if(status){
    navigate("/dashboard", {
      replace:true
    })
  }


    // const errors = validate()
    // setFieldErrors(errors)
    // if (Object.keys(errors).length > 0) return

    // sendData({ email, password })
  }


  function validate() {
    const errors = {}
    if (!email.trim()) errors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Enter a valid email'
    if (!password) errors.password = 'Password is required'
    return errors
  }

  async function sendData(object) {
    setLoading(true)
    setMessage('')
    setError('')
    try {
      const response = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object),
      })

      // the login route replies with plain text on 404 / 500
      const raw = await response.text()
      let result
      try {
        result = JSON.parse(raw)
      } catch {
        result = { message: raw }
      }

      if (!response.ok) {
        throw new Error(result.message)
      }

      const store = remember ? localStorage : sessionStorage
      store.setItem('obn18-user', JSON.stringify(result.user))

      setMessage(`${result.message}. Taking you home…`)
      setTimeout(() => navigate('/'), 1200)
    } catch (err) {
      setError(err.message || 'Unable to connect to the server')
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <aside className="auth-aside">
          <Link to="/" className="auth-brand">
            obn<span>18</span>
          </Link>

          <div className="auth-aside-copy">
            <h2>Welcome back.</h2>
            <p>Log in to pick up your cart, check an order or revisit your saved fits.</p>
            <ul className="auth-perks">
              <li>Your cart, right where you left it</li>
              <li>Track every order in one place</li>
              <li>Member-only restock alerts</li>
            </ul>
          </div>
        </aside>

        <div className="auth-panel">
          <h1 className="auth-title">Log in</h1>
          <p className="auth-sub">Enter your details to access your obn18 account.</p>

          {message && <p className="auth-alert success">{message}</p>}
          {error && <p className="auth-alert error">{error}</p>}

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* email */}
            <div className={`auth-field${fieldErrors.email ? ' invalid' : ''}`}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {fieldErrors.email && <span className="auth-error">{fieldErrors.email}</span>}
            </div>

            {/* password */}
            <div className={`auth-field${fieldErrors.password ? ' invalid' : ''}`}>
              <label htmlFor="password">Password</label>
              <div className="auth-password">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="auth-reveal"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {fieldErrors.password && (
                <span className="auth-error">{fieldErrors.password}</span>
              )}
            </div>

            <div className="auth-meta">
              <label className="auth-check">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <Link to="/signup" className="auth-link">
                Forgot password?
              </Link>
            </div>

            <button className="auth-submit" type="submit" disabled={loading}>
              {loading ? 'Logging in…' : 'Log in'}
            </button>
          </form>

          <div className="auth-divider">or</div>

          <p className="auth-switch">
            New to obn18? <Link to="/signup" className="auth-link">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
