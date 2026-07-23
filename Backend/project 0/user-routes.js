import express from 'express';

const router = express.Router();




//signup route 

router.post("/signup", (req, res)=>{
res.send("Signedup")
})


export default router;