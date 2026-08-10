import mongoose from 'mongoose';

const orderSchema= new mongoose.Schema({
    // - Fields: user (reference to Users), items (array), total, status, shippingAddress, timestamps
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    products:[
        {
            productId:{
            type:mongoose.Types.ObjectId,
            ref:"Product",
            required:true
            },
            quantity:{
                type:Number,
                required:true,
                default:1,
                min:1
            },
            price:{
                type:Number,
                // required:true
            }
        }

    ],

    status:{
        type:String,
        enum:["pending", "processing", "shipped", "delivered", "cancelled"],
        required:true,
        default:"pending"
    },

    totalAmount:{
        type:Number
    }

}, {
    timestamps:true
})


const Order = mongoose.model("Order", orderSchema);

export default Order;