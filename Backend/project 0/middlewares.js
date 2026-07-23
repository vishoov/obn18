import express from 'express';

const app = express();
import userRoutes from "./user-routes.js";
import productRoutes from './productRoutes.js'
import morgan from 'morgan';

function printTime(req, res, next){
    console.log(Date.now().toLocaleString());
    next();
}

app.use(morgan('dev'));
app.use("/users", userRoutes)
app.use('/products', productRoutes)

app.use((req, res, next)=>{

    console.log("-------------------------------")
    // console.log(req.headers);

    next();   
})

app.use((req, res, next)=>{
    console.log("you can say")
    next();
})



app.use((req, res, next)=>{
    console.log("step 1")
    next();
})


app.use(express.json())


function logger(req, res, next){
    const method = req.method;
    const route = req.path;
    const time = new Date().toLocaleString();

    console.log("method:", method, "Time: ",  time, "Route: ",  route);
    next();
}

app.use(logger)


app.get("/data", (req, res)=>{
    console.log(req.body)
    res.send("take care")
})


app.get("/", printTime, (req, res)=>{
    res.send("Welcome")
})

app.get("/about", (req, res)=>{
    res.send("Welcome to about page")
})


// Error Handler MW

function errorHandler(error, req, res, next){
    console.error(error.message);

    res.status(error.status).json({
        success:false,
        message:error.message|| "Internal Server Error"
    });

}


app.get("/error", (req, res, next)=>{
    const error = new Error("Something went wrong");
    error.status=400;
    next(error);
})

app.use(errorHandler)



app.listen(3000, ()=>{
    console.log("Server is live on port 3000")
})