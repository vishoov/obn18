import React from 'react'
import ProductCard from './ProductCard'

const denims = [
  {
    _id: '6a757862ed973f12cd05d8ca',
    name: 'slim fit denim',
    description: 'Mid-wash, tapered leg, everyday stretch.',
    price: 2499,
    category: "Men's",
    stock: 6,
    Images: ['https://picsum.photos/seed/denim-slim/400/400'],
    isAvailable: true,
  },
  {
    _id: '6a757ce12e347e97d56ec6e3',
    name: 'straight leg denim',
    description: 'Rigid indigo with a clean straight fall.',
    price: 2899,
    category: "Men's",
    stock: 3,
    Images: ['https://picsum.photos/seed/denim-straight/400/400'],
    isAvailable: true,
  },
  {
    _id: '6a757cf82e347e97d56ec6e5',
    name: 'relaxed denim',
    description: 'Roomy through the thigh, light fade.',
    price: 2199,
    category: "Men's",
    stock: 0,
    Images: ['https://picsum.photos/seed/denim-relaxed/400/400'],
    isAvailable: false,
  },
  {
    _id: '6a757cfd2e347e97d56ec6e6',
    name: 'denim jacket',
    description: 'Classic trucker cut, dark rinse.',
    price: 3499,
    category: "Men's",
    stock: 4,
    Images: ['https://picsum.photos/seed/denim-jacket/400/400'],
    isAvailable: true,
  },
]

const MenDenims = () => {
  return (
    <section>
      <div className="page-header">
        <h1>Men&apos;s Denim</h1>
        <span className="page-subtitle">{denims.length} products</span>
      </div>
      <div className="gridd">
        {denims.map((prod) => (
          <ProductCard key={prod._id} product={prod} />
        ))}
      </div>
    </section>
  )
}

export default MenDenims
