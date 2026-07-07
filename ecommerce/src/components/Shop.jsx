import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

const Shop = ()=>{
const [products, setProducts] = useState([]);
const [filtered, setFiltered] = useState([]);
const [category, setCategory] = useState("");
// dummyjson.com/products

// []=> <Product product={product} />


useEffect(()=>{
    const getProducts = async () =>{
      const response= await fetch("https://dummyjson.com/products");

      if(!response.ok){
        return "No products found"
      }

      const data = await response.json();
      const fetchedproducts = data.products;
      setProducts(fetchedproducts)
      setFiltered(fetchedproducts)
      console.log(data);
    }

    getProducts();

}, [])

let categories = [...products.map((item)=>item.category)];
categories = new Set(categories)
    return (
        <div className="min-h-screen bg-gray-100 p-2">
            <h1>This is the shop</h1>

            <FilterBar 
            categories={categories}
            selectedCategory = {category}
            filter = {setCategory}
            />
            <p>{category}</p>
            <div className="grid gap-5 grid-cols-4">
                {filtered.map((product)=>{
                    if(product.category==category){
                            return <ProductCard product={product} key={product.id} />
                        }
                }
                )}
                
            </div>
        </div>
    )
}


export default Shop;