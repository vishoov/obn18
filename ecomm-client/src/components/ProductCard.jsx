import React from 'react'
import { Link } from 'react-router'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="product_card">
        <img
          className="product_image"
          src={product.Images?.[0]}
          alt={product.name}
        />
        <h2 className="product_title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="product_cta">
          ₹{product.price}
          <button type="button" disabled={product.isAvailable === false}>
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
