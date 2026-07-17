//import logic of epxress
const express = require('express');
//creating an instance of the express app 
const app = express();

app.use(express.json());

// basic route handler
app.get("/", (req, res)=>{
    console.log(req.body);
    res.send("Welcome to the server")
})

app.get("/about", (req, res)=>{
    res.send("This is the about page of our application")
})

// PORT Listener 
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("The server is live on port: ", PORT)
});