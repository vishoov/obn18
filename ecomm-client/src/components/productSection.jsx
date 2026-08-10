import React from 'react'
import {useState, useEffect} from 'react';
const productSection = () => {
const [products, setProducts] = useState([]);
     useEffect( ()=>{
        const fetchData = async ()=>{
        const response = await fetch("http://localhost:3000/products/all/1");
        if(!response.ok){
            throw new Error("no products found")
        }

        const receievedData = await response.json();

        console.log(receievedData)
        setProducts(receievedData.products);

    }
    fetchData();
    }, [])

  return (
    <div>

    {products.map((prod)=>{
         return (
            <div key={prod._id}>
            <h1>{prod.name}</h1>
            <h2>{prod.price}</h2>
            </div>
         )
    })}
    </div>
  )
}

export default productSection