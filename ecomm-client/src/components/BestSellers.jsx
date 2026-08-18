import React from 'react'
import { Link } from 'react-router'

import './Bestsellers.css';


// <Link to=`/products/${product.id}'><div>...</div></Link>
const products = [
    {
        "_id": "6a757862ed973f12cd05d8ca",
        "name": "toothpaste",
        "description": "ultra white teeth",
        "price": 20,
        "category": "Home",
        "stock": 1,
        "Images": ["https://picsum.photos/seed/toothpaste/300/300"],
        "isAvailable": true,
        "createdAt": "2026-08-07T06:17:06.461Z",
        "updatedAt": "2026-08-07T06:17:06.461Z",
        "__v": 0
    },
    {
        "_id": "6a757ce12e347e97d56ec6e3",
        "name": "lights",
        "description": "best product",
        "price": 30,
        "category": "Home",
        "stock": 1,
        "Images": ["https://picsum.photos/seed/lights/300/300"],
        "isAvailable": true,
        "createdAt": "2026-08-07T06:36:17.747Z",
        "updatedAt": "2026-08-07T06:36:17.747Z",
        "__v": 0
    },
    {
        "_id": "6a757cf82e347e97d56ec6e5",
        "name": "bottles",
        "description": "best product",
        "price": 10,
        "category": "Home",
        "stock": 1,
        "Images": ["https://picsum.photos/seed/bottles/300/300"],
        "isAvailable": true,
        "createdAt": "2026-08-07T06:36:40.453Z",
        "updatedAt": "2026-08-07T06:36:40.453Z",
        "__v": 0
    },
    {
        "_id": "6a757cfd2e347e97d56ec6e6",
        "name": "glasses",
        "description": "best product",
        "price": 10,
        "category": "Home",
        "stock": 1,
        "Images": ["https://picsum.photos/seed/glasses/300/300"],
        "isAvailable": true,
        "createdAt": "2026-08-07T06:36:45.875Z",
        "updatedAt": "2026-08-07T06:36:45.875Z",
        "__v": 0
    },
    {
        "_id": "6a757d062e347e97d56ec6e7",
        "name": "lunchbox",
        "description": "best product",
        "price": 10,
        "category": "Home",
        "stock": 1,
        "Images": ["https://picsum.photos/seed/lunchbox/300/300"],
        "isAvailable": true,
        "createdAt": "2026-08-07T06:36:54.186Z",
        "updatedAt": "2026-08-07T06:36:54.186Z",
        "__v": 0
    }
]

const BestSellers = () => {
  return (
    <div>
        <h1>Recommended for you</h1>
<div className='gridd'>
        {products.map((prod)=>{
            return <Link 
                to={`/product/${prod._id}`}

                >
                    <div className='product_card'>
                        <img className='product_image' src={prod.Images[0]} alt={prod.name} />
                        <h2 className='product_title'>{prod.name}</h2>
                        <p>{prod.description}</p>
                        <div className="product_cta">
                            ₹{prod.price}
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <br/>
             </Link>
        })}


    </div>
    </div>
  )
}

export default BestSellers