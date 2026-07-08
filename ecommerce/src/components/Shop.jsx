import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

const Shop = ()=>{
const [products, setProducts] = useState([]);
const [category, setCategory] = useState("All");
const [price, setPrice] = useState(0);
// const [categories, setCategories] = useState([]);
    useEffect(()=>{
try{
        const getProducts = async ()=>{
                const response= await fetch("https://dummyjson.com/products");

                if(!response.ok){
                    throw new Error("Products couldnt be fetched")
                }

                const data = await response.json();

                console.log(data);

                const productsData = data.products;

                
                setProducts(productsData);
                
        }

        getProducts();
    }
    catch(err){
        console.error(err.message)
    }
    }, [])

    const categories = ["All", ...new Set(products.map((prod)=>prod.category))];

    const filteredProducts = products.filter(
        (prod)=>{
            let matchCategory = true;
            
            if(category!=="All"){
            if(prod.category!==category){
                matchCategory=false;
            }


        }

            let matchPrice = true;

            if(price!==0){
                if(prod.price>price){
                    matchPrice=false;
                }
            }


            return matchPrice && matchCategory;

        })
                
    return (
        <div className="min-h-screen bg-gray-100 p-2">
            <p className="text-black">This is the shop</p>
            <p>{category}</p>

        <FilterBar 
        setCategory={setCategory}
        category={category}
        categories={categories}

/>


            <p>below is the shop select tag and above is the filterbar</p>



        <select
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        >
            {
                categories.map((cat)=>{
                    return <option key={cat} value={cat}>{cat}</option>
                })
            }
        </select>

        <div className="flex align-center justify-center">

            <input
            type='range'
            min="0"
            max="5000"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}

            />

            <p>{price}</p>
</div>

            <div className="grid grid-cols-4 gap-2">
            {
                filteredProducts.map((prod)=>{
                    return <ProductCard  key={prod.id} product = {prod} />
                })
            }
            </div>

        </div>
    )
}


export default Shop;