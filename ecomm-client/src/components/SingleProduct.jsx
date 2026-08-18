import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
const SingleProduct = () => {
const [product, setProduct] = useState({});
const { id } = useParams();

  useEffect(()=>{
    async function getProduct(id){
      const response = await fetch(`http://localhost:3000/products/${id}`);

      if(!response.ok){
        console.log("error occured")
      }

      const data = await response.json();
      // console.log(data)
      setProduct(data.product[0]);
  
    }
    getProduct(id);    
    console.log(product);
  }, [])

  
  return (
    <div>
      <h1>Product Page</h1>
      <h2>{product.name}</h2>
      <h2>{product.description}</h2>
      <h2>{product.category}</h2>
    </div>
  )
}

export default SingleProduct