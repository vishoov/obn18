
import mongoose from "mongoose";


const DBUri= process.env.MONGOURI;



const connectDB = async ()=>{
    try{
        console.log("Trying to connect to DB");
        console.log(DBUri)

        const connection = await mongoose.connect(DBUri);

        console.log("MongoDB Connected");


    }
    catch(err){
        console.error("Mongo DB Connection Error ", err.message);
    }
}



export default connectDB;