import 'dotenv/config';


import express from 'express';
import userRoutes from './routes/user.routes.js'
import connectDB from './db/mongo.js';
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'
import orderRoutes from './routes/order.routes.js'

import cors from 'cors';
import aggregateRoutes from './aggregation/user.aggregation.js'
import cookieParser from 'cookie-parser';


import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
  windowMs:25*60*1000,
  limit:1
})


const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,                
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cookieParser());
app.use(express.json());

await connectDB();


app.use(limiter);

app.get("/", (req, res)=>{
    res.send("Welcome to the server")
})


app.use("/users", userRoutes)
app.use("/products", productRoutes)
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);
app.use('/aggregate', aggregateRoutes);


app.listen(3000, ()=>{
    console.log("The server is live on port 3000")
})