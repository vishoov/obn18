import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import './Page.css'
import './SingleProduct.css'

const SingleProduct = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { id } = useParams()

  useEffect(() => {
    async function getProduct(productId) {
      setLoading(true)
      setError('')
      try {
        const response = await fetch(
          `http://localhost:3000/products/${productId}`
        )
        if (!response.ok) {
          throw new Error('We could not find that product')
        }
        const data = await response.json()
        const found = data.product?.[0]
        if (!found) {
          throw new Error('We could not find that product')
        }
        setProduct(found)
      } catch (err) {
        setError(err.message || 'Unable to connect to the server')
      } finally {
        setLoading(false)
      }
    }
    getProduct(id)
  }, [id])

  if (loading) {
    return (
      <div className="page">
        <div className="product-detail">
          <div className="detail_skeleton" />
          <div className="detail_skeleton short" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page">
        <div className="state error">
          <h2>Product unavailable</h2>
          <p>{error}</p>
          <Link to="/shopAll" className="link-btn">
            Back to Shop All
          </Link>
        </div>
      </div>
    )
  }

  const outOfStock = product.isAvailable === false || product.stock === 0

  return (
    <div className="page">
      <Link to="/shopAll" className="back-link">
        ← Shop All
      </Link>

      <div className="product-detail">
        <div className="detail-media">
          <img src={product.Images?.[0]} alt={product.name} />
        </div>

        <div className="detail-info">
          <span className="chip">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">₹{product.price}</p>
          <p className="detail-desc">{product.description}</p>
          <p className={outOfStock ? 'stock out' : 'stock'}>
            {outOfStock ? 'Out of stock' : `In stock · ${product.stock} left`}
          </p>
          <button type="button" className="buy-btn" disabled={outOfStock}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
