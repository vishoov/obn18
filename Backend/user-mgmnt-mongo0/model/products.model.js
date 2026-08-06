import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:String,
    price:Number
})

const Product = mongoose.model('products', productSchema);

export default Product;