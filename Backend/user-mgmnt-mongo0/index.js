

import express from 'express';
import userRoutes from './routes/user.routes.js'


const app = express();


app.use(express.json());


app.get("/", (req, res)=>{
    res.send("Welcome to the server")
})


app.use("/users", userRoutes)



app.listen(3000, ()=>{
    console.log("The server is live on port 3000")
})