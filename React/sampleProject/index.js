const express = require('express');


const app = express();


app.get('/', (req, res)=>{
    res.send("Welcome to the express server")
})

app.listen(3000, ()=>{
    console.log("server is live on port 3000")
})