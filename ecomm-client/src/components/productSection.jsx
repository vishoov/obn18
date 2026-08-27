import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import './Page.css'

const ProductSection = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/all/1')
        if (!response.ok) {
          throw new Error('No products found')
        }
        const receievedData = await response.json()
        setProducts(receievedData.products)
      } catch (err) {
        setError(err.message || 'Unable to connect to the server')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="page">
      <div className="page-header">
        <h1>Shop All</h1>
        {!loading && !error && (
          <span className="page-subtitle">
            {products.length} {products.length === 1 ? 'product' : 'products'}
          </span>
        )}
      </div>

      {loading && (
        <div className="gridd">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="card_skeleton" key={i} />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="state error">
          <h2>Couldn&apos;t load products</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="state">
          <h2>Nothing here yet</h2>
          <p>Check back soon — we&apos;re still stocking the shelves.</p>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="gridd">
          {products.map((prod) => (
            <ProductCard key={prod._id} product={prod} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductSection
