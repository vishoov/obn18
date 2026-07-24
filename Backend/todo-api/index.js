import express from 'express';

import todoRoutes from "./view/todo.routes.js";


const app = express();



app.use(express.json());
app.use("/todos", todoRoutes)

app.get("/", (req, res)=>{
    res.send("Welcome to the To-Do API")
})


app.listen(3000, ()=>{
    console.log("Server is live on port 3000")
})