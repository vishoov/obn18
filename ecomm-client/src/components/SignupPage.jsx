import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import './Auth.css'

const API = 'http://localhost:3000/users'

function scorePassword(password) {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return score
}

const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong']

const SignupPage = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('User')
  const [password, setPassword] = useState('')

  // ui states
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const strength = scorePassword(password)

  function validate() {
    const errors = {}
    if (!name.trim()) errors.name = 'Name is required'
    if (!email.trim()) errors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Enter a valid email'
    if (!age) errors.age = 'Age is required'
    else if (Number(age) < 13) errors.age = 'You must be at least 13'
    if (!password) errors.password = 'Password is required'
    else if (password.length < 8) errors.password = 'Use at least 8 characters'
    return errors
  }

  async function sendData(object) {
    setLoading(true)
    setMessage('')
    setError('')
    try {
      const response = await fetch(`${API}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object),
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.message)
      }

      setMessage(`${result.message} Redirecting you to log in…`)
      setTimeout(() => navigate('/login'), 1500)
    } catch (err) {
      setError(err.message || 'Unable to connect to the server')
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    // prevent's browser's default behaviour of form submission that is page reload

    const errors = validate()
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    sendData({ name, age, email, role, password })
  }

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <aside className="auth-aside">
          <Link to="/" className="auth-brand">
            obn<span>18</span>
          </Link>

          <div className="auth-aside-copy">
            <h2>Denim that earns its wear.</h2>
            <p>Create an account to track orders, save fits and get first access to drops.</p>
            <ul className="auth-perks">
              <li>Free shipping on your first order</li>
              <li>Early access to new collections</li>
              <li>Save your wishlist across devices</li>
            </ul>
          </div>
        </aside>

        <div className="auth-panel">
          <h1 className="auth-title">Create an account</h1>
          <p className="auth-sub">Join obn18 and start shopping in seconds.</p>

          {message && <p className="auth-alert success">{message}</p>}
          {error && <p className="auth-alert error">{error}</p>}

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* name */}
            <div className={`auth-field${fieldErrors.name ? ' invalid' : ''}`}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {fieldErrors.name && <span className="auth-error">{fieldErrors.name}</span>}
            </div>

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

            <div className="auth-row">
              {/* age */}
              <div className={`auth-field${fieldErrors.age ? ' invalid' : ''}`}>
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  min="13"
                  placeholder="18"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                {fieldErrors.age && <span className="auth-error">{fieldErrors.age}</span>}
              </div>

              {/* role */}
              <div className="auth-field">
                <label htmlFor="role">Role</label>
                <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="SuperAdmin">SuperAdmin</option>
                </select>
              </div>
            </div>

            {/* password */}
            <div className={`auth-field${fieldErrors.password ? ' invalid' : ''}`}>
              <label htmlFor="password">Password</label>
              <div className="auth-password">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
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

              {password && (
                <div className="auth-strength">
                  <div className="auth-strength-bar">
                    {[1, 2, 3, 4].map((level) => (
                      <span key={level} className={strength >= level ? 'on' : ''} />
                    ))}
                  </div>
                  <span className="auth-strength-label">{strengthLabels[strength]}</span>
                </div>
              )}

              {fieldErrors.password ? (
                <span className="auth-error">{fieldErrors.password}</span>
              ) : (
                <span className="auth-hint">Mix upper &amp; lower case, a number and a symbol.</span>
              )}
            </div>

            <button className="auth-submit" type="submit" disabled={loading}>
              {loading ? 'Creating account…' : 'Sign up'}
            </button>
          </form>

          <div className="auth-divider">or</div>

          <p className="auth-switch">
            Already have an account? <Link to="/login" className="auth-link">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
