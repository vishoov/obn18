import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:true,
        min:10
    },
    category:{
        type:String,
        enum:["Electronics", "Fashion", "Home"]
    },
    stock:{
        type:Number,
        required:true,
        min:1,
        default:1
    }, 
    Images:[
        {
            type:String
        }
    ],
    isAvailable:{
        type:Boolean,
        required:true,
        default:true
    }
}, {
    timestamps:true
})

const Product = mongoose.model('products', productSchema);

export default Product;