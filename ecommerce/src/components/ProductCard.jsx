const ProductCard = ({product})=>{

    function getDiscountedPrice(price, discountPercentage){
        const final = price-price*discountPercentage/100;
        return Number(final.toFixed(2));
    }



    return (
        <div className="rounded border border-gray-200 bg-white p-3 shadow-lg flex flex-col align-middle justify-around ">
            <img className="shadow-lg shadow-gray-300"
            src={product.thumbnail}
            alt={product.title}
            />
            <p className="text-lg text-black p-5">{product.title}</p>
            <p className="text-sm text-grey-300">{product.brand}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-xl font-bold text-green-800  border border-gray-300 p-2 rounded-xl shadow-md">${getDiscountedPrice(product.price, product.discountPercentage)} <span className="text-sm line-through text-gray-500">${product.price}</span></p>
            <div className="flex align-middle justify-between mt-5">
                <p className="text-yellow-500">{product.rating}</p>
                <button className="bg-blue-400 text-white rounded-xl py-1 px-3">Buy Now</button>
            </div>
        </div>
    )

}


export default ProductCard;