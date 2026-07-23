// ES6 version of our server 

import express from 'express';
import path from 'path'
// const express = require('express')
import { fileURLToPath } from 'url'
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route handler -> is the function i.e. like an even listener that helps us in handling a specific request on a given route 
app.get("/", (req, res)=>{
    res.send("<div><h1>Welcome to the server</h1> <br> <p>This is send from the server side</div>")
})

app.use(express.json());


app.get("/requestMethods", (req, res)=>{
    // req: incoming client request formatted in an object
    const method = req.method;
    const url = req.url;
    const path = req.path;
    const body = req.body;

    const headers = req.headers;
    const cookies = req.cookies;

    console.log(headers, cookies)


    console.log(`Request received using ${method} on ${url} with ${path} containing ${body}`)
    console.log(body)

    res.send("ok")

})



// Response methods 
app.get("/responseMethods", (req, res)=>{
    // res.send("Hello bhai"); //this sends HTML
    // res.send({name:"xyz"}); //sends a json
    // res.sendStatus(500)
    // res.json({
    //     name:"hello",
    //     address:"bye"
    // })

    res.sendFile(__dirname + "/index.html");

})


app.get("/redirect", (req, res)=>{
    res.redirect('/about')
})


app.get('/about', (req, res)=>{
    res.send("Welcome to the about page")
})


// Syntax 
// app.METHOD(route, handlerFunction)


const users = [
    {
        id:1, name:"mr."
    },
    {
        id:2, name:"ms."
    }
]



// Route parameters 
app.get("/parameters/:id/:name/:age", (req, res)=>{
    const  { id, name, age } = req.params;
    
    const data = users.filter(user=>user.id==id);

    res.send({data, name, age})
})

// app.get("/parameters", (req, res)=>{
//     res.send("nothing here")
// })

app.get("/search", (req, res)=>{
    const { quer, a, b, c } = req.query;

    res.send({
        quer,
        a,
        b,
        c
    
    
})
})

// http://localhost:3000/search?quer=rohit_sharma

// in memory array
// const tasks = []


// add a task
// delete a task 
// update a task 

// code for this
// what could be the problems using in memory storage 
// how many routes are required. can you reduce them?

const tasks = [];

app.post("/task", (req, res)=>{
    const { id, title, status ="pending" } = req.body;
    tasks.push({
        id, 
        title,
        status
    })

    res.send({
        tasks
    })
})



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("The server is live on port 3000")
});

// http://localhost:3000/