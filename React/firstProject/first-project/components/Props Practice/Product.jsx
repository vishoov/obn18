import './product.css'

const Product = ({product, name})=>{
    console.log(product, name)
    const productDetails = product;
    const productInfo = productDetails.realInfo;
    console.log(productInfo)

    return (
        <div className="product-card">
        <h1>{productInfo.name}</h1>
        <h2>{productInfo.price}</h2>
        <h2>{productInfo.inStock?"Product stock me hai":"Out of Stock"}</h2>
        <h3>{productInfo.category}</h3>

        </div>
    )
}

export default Product;