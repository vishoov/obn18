import express from "express";
import Product from "../model/products.model.js";
const router = express.Router();



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

router.get("/all/:pageNumber", async (req, res)=>{
    try{

        const pageNumber = req.params.pageNumber;
        console.log(pageNumber);
        const limit = 5;
        const products = await Product.find({})
                                        .limit(limit)
                                        .skip((pageNumber-1)*limit);

        // limit, skip 
        // limit=5 means one a single page we'll show only 5 products


        if(!products){
            return res.status(400).json({
                message:"No products found"
            })
        }

        return res.status(200).json({
            message:"Products found successfully",
            products
        })


    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

router.get("/:id", async (req, res)=>{
    try{
        const id = req.params.id;

        const product = await Product.find({
            _id:id
        })

        if(!product){
            return res.status(404).json({
                message:"Product Not Found"
            })
        }

        res.status(200).json({
            message:"Product Found",
            product
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

//update product 


// delete product

export default router;