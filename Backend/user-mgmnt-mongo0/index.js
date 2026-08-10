import 'dotenv/config';


import express from 'express';
import userRoutes from './routes/user.routes.js'
import connectDB from './db/mongo.js';
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'
import orderRoutes from './routes/order.routes.js'

import cors from 'cors';





const app = express();


app.use(cors({
    origin:"*"
}))

app.use(express.json());

await connectDB();



app.get("/", (req, res)=>{
    res.send("Welcome to the server")
})




app.use("/users", userRoutes)
app.use("/products", productRoutes)
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);


app.listen(3000, ()=>{
    console.log("The server is live on port 3000")
})