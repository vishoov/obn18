import express from "express";
import Product from "../model/products.model.js";
const router = express.Router();

router.get('/getAll', (req, res)=>{
    res.send("These are the products")
})

router.post('/create', async (req, res)=>{
    const data = req.body;

    const product = await Product.create(data);

    if(!product){
        return res.status(500).json({
            message:"Product couldnt be created"
        })
    }

    res.status(201).json({
        message:"Product created successfully",
        product:product
    })
})

export default router;