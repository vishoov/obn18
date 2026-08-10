import express from 'express';
const router = express.Router();


import Order from '../model/order.model.js';
import Product from '../model/products.model.js';

router.get('/', async (req, res)=>{
    try{
        const orders = await Order.find();

        if(!orders){
            return res.status(404).json({
                message:"Orders not Found"
            })
        }

        res.status(200).json({
            orders
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

router.post("/create", async (req, res)=>{
    try{
        //client side details
        const { userId }= req.body;
        const { products } = req.body;


        if(!userId || !products){
            return res.status(400).json({
                message:"Please enter all the required info"
            })
        }

        // fetch all the prices of given products from products collection
        //promise.all because we will make multiple mongodb calls 

        const productwithprices= await Promise.all(
            products.map(
                async (item)=>{
                    //only select price because we want price calculation to be on server side 
                    const product = await Product.findById(item.productId).select("price stock");
                    if(!product){
                        return res.status(404).json({
                            message:"Product Not Found"
                        })
                    }

                    if(product.stock<item.quantity){
                        return res.status(400).json({
                            message:"Item not in stock"
                        })
                    }
                    return {
                        productId:item.productId,
                        quantity:item.quantity,
                        price:product.price
                    }
                }
            )
        )

        //calculate the total amount
        const totalAmount = productwithprices.reduce(
            (total, item)=>total+item.price*item.quantity, 0
        )

        //this is where we create an order (DB call for create)
        const order = await Order.create({
            userId:userId,
            products:productwithprices,
            totalAmount:totalAmount,
            status:"pending"
        })

        if(!order){
            throw new Error("Order not created")
        }

        res.status(201).json({
            message:"Order Placed",
            order
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message

        })
    }
})

// update status
router.patch("/update/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const { status } = req.body;

        const order = await Order.findByIdAndUpdate(id, {
            
                status:status
            },
            {
                new:true,
                runValidators:true
            }
        );
        console.log(order)
        
        
        if(!order){
            return res.status(404).json({
                message:"Order not found"
            })
        }

        return res.status(202).json({
            message:"Order found",
            order:order
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})


// get single order by id 



export default router;