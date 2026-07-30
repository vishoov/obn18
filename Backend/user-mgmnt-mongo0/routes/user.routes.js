import express from 'express';

const router = express.Router();


let users = [
    {
        id:1,
        name:"roopansh",
        email:"roopansh@gmail.com",
        password:"hehehehehehehe"
    }
]



router.get("/", (req, res)=>{
    res.send("This is the user base route")
})


router.post('/signup', (req, res)=>{
    const data = req.body;
    console.log(data);
    users.push(data)
    console.log("Users: ", users)
    res.send("recieved the data")
})

router.post("/login", (req, res)=>{

    try{
    // user must be existing in users array
    const {email, password} =req.body;
    
    const user = users.find((user)=>user.email===email);

    if(!user){
        res.status(404).send("User not found");
    }


    if(user.password !== password){
        res.status(401).send("Incorrect Password");
    }

    res.status(200).send("Login Successful")
}
catch(err){
    res.status(500).send("Internal Server Error")
}
})

router.patch('/changePassword/:id', (req, res)=>{
        let { id } = req.params;

        id = Number(id);

        const { password, newPassword} = req.body;

        let user= users.find((user)=>user.id===id);

        if(!user){
            res.status(404).json({
                message:"User not found",
                status:404
            })
        }

        if(user.password!==password){
            res.status(401).json({
                message:"Incorrect Password",
                status:401
            })
        }


        user.password = newPassword;
        console.log(users);
        res.status(200).json({
            user:user,
            message:"Password updated successfully"
        })
        

})

router.delete('/deleteUser/:id', (req, res)=>{
    let { id } = req.params;
    id=Number(id)
    const user = users.find((user)=>user.id==id);

    if(!user){
        res.status(404).json({
            message:"User not found"
        })
    }
    console.log(users);
    res.status(200).json({
        message:"USer deleted"
    })
});


router.put('/updateUser/:id', (req, res)=>{

})


export default router;
