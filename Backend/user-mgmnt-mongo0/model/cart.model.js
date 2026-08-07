import mongoose from 'mongoose';


const cartSchema = new mongoose.Schema({
    // this holds the id of the owner of this cart 
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    items:[
        {
            type:String
        }
    ],
    totalAmount:{
        type:Number,
        min:0,
        max:1000000000
    }
})

const Cart = mongoose.model("Cart", cartSchema);


export default Cart;