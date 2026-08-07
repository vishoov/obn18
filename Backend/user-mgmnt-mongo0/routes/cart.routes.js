import express from 'express';
import Cart from '../model/cart.model.js';

const router = express.Router();


router.get("/", (req, res)=>{
    res.send("welcome to the cart route")
})

router.post("/new", async(req, res)=>{
    try{
        const cartData = req.body;

        const cart = await Cart.create(cartData);

        if(!cart){
            return res.status(500).json({
                message:"Cart couldnt be created"
            })
        }

        res.status(200).json({
            message:"Cart created",
            cart
        })
    }
    catch(err){
        res.send(err.message)
    }
})

export default router;