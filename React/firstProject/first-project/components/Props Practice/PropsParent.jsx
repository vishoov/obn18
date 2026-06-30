import productDetails from "./data.json";
import Product from "./Product.jsx";

const PropsParent = () => {
    console.log(productDetails)
  return (
    <div>
        <Product product={productDetails} name="Product Card" />


    </div>
  )
}

export default PropsParent