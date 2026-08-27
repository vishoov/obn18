import React, { useState } from 'react'
import { Link } from 'react-router'
import BestSellers from './BestSellers'
import heroImg from '../assets/hero.png'
import './Page.css'
import './HomePage.css'

const categories = [
  {
    to: '/collection/mens-collection',
    label: "Men's Denims",
    blurb: '12 fits',
    img: 'https://picsum.photos/seed/denims/600/700',
  },
  {
    to: '/shopAll',
    label: 'Home Essentials',
    blurb: 'Everyday picks',
    img: 'https://picsum.photos/seed/homeessentials/600/700',
  },
  {
    to: '/collection',
    label: 'Collections',
    blurb: 'Curated edits',
    img: 'https://picsum.photos/seed/collections/600/700',
  },
]

const perks = [
  {
    title: 'Free shipping over ₹999',
    body: 'Dispatched within 24 hours, tracked all the way to your door.',
  },
  {
    title: '30-day returns',
    body: 'Changed your mind? Send it back, no questions and no restocking fee.',
  },
  {
    title: 'Made to last',
    body: 'Every piece is spec’d for a few years of use, not a few washes.',
  },
  {
    title: 'Real support',
    body: 'A small team answers the emails. Usually the same day.',
  },
]

const reviews = [
  {
    quote:
      'Ordered the denims on a Tuesday, wore them on Thursday. The fit chart was actually accurate for once.',
    name: 'Aditi R.',
    meta: "Men's Denims",
  },
  {
    quote:
      'Small catalogue, which is the point. I did not have to compare forty lunchboxes to buy one.',
    name: 'Karan M.',
    meta: 'Home Essentials',
  },
  {
    quote:
      'Returned one item and the refund landed in two days. That alone made me order again.',
    name: 'Sneha T.',
    meta: 'Verified buyer',
  },
]

const HomePage = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div className="page">
      <section className="hero-band">
        <div className="hero-copy">
          <h1>Everyday things, done right.</h1>
          <p>
            A small catalogue of home essentials, picked so you don&apos;t have
            to scroll through a thousand of them.
          </p>
          <Link to="/shopAll" className="link-btn">
            Shop All
          </Link>
        </div>
        <img className="hero-art" src={heroImg} alt="" />
      </section>

      <section className="home-section">
        <div className="page-header">
          <h1>Shop by category</h1>
          <span className="page-subtitle">Three shelves, that&apos;s it</span>
        </div>
        <div className="category-grid">
          {categories.map(({ to, label, blurb, img }) => (
            <Link key={label} to={to} className="category-tile">
              <img src={img} alt="" className="category-img" />
              <div className="category-body">
                <h3>{label}</h3>
                <span>{blurb}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BestSellers />

      <section className="home-section perk-strip">
        {perks.map(({ title, body }) => (
          <div key={title} className="perk">
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </section>

      <section className="home-section promo-band">
        <div className="promo-copy">
          <span className="promo-kicker">This week</span>
          <h2>Denim drop — up to 30% off</h2>
          <p>
            The winter run of straight and tapered fits is in. Once a size sells
            out we don&apos;t restock it, so the good ones go early.
          </p>
          <Link to="/collection/mens-collection" className="link-btn">
            Shop the drop
          </Link>
        </div>
        <img
          className="promo-art"
          src="https://picsum.photos/seed/denimdrop/700/500"
          alt=""
        />
      </section>

      <section className="home-section">
        <div className="page-header">
          <h1>What people say</h1>
          <span className="page-subtitle">4.7 average over 1,240 orders</span>
        </div>
        <div className="review-grid">
          {reviews.map(({ quote, name, meta }) => (
            <figure key={name} className="review-card">
              <blockquote>&ldquo;{quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{name}</strong>
                <span>{meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="home-section newsletter">
        <div>
          <h2>Get the drop before it&apos;s public</h2>
          <p>One email a month. New arrivals, restocks, nothing else.</p>
        </div>
        {subscribed ? (
          <p className="newsletter-done">
            You&apos;re on the list — check your inbox to confirm.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </section>
    </div>
  )
}

export default HomePage
