import express from 'express';
import User from '../model/user.model.js';

const router = express.Router();


// let users = [
//     {
//         id:1,
//         name:"roopansh",
//         email:"roopansh@gmail.com",
//         password:"hehehehehehehe"
//     }
// ]



router.get("/", (req, res)=>{
    res.send("This is the user base route")
})


router.post('/signup', async (req, res)=>{
    try{
    const data = req.body;
    console.log(data);
    // in memory data
    // users.push(data)

    // db data 
    // const user = await User.create(data);
   
//    option:2
    // const user = await User.insertOne(data);
//  option: 3
    const user = new User({
        name:data.name,
        age:data.age,
        email:data.email,
        role:data.role || "User",
        password:data.password
    });

    const addedUser = await user.save();


    if(!addedUser){
        res.status(500).json({
            message:"User couldnt be created"
        })
    }
    res.status(200).json({
        message:"User created successfully",
        user:addedUser
    })
}
catch(err){
    res.status(500).send(err.message)
}
})

router.post("/login", async (req, res)=>{

    try{
    // user must be existing in users array
    const {email, password} =req.body;
    
    // const user = users.find((user)=>user.email===email);
    let user =await User.find({email:email});
    user = user[0];


    if(!user){
        res.status(404).send("User not found");
    }


    if(user.password !== password){
        res.status(401).send("Incorrect Password");
    }

    res.status(200).json({
        message:"Login Successfull",
        user:user
    })
}
catch(err){
    res.status(500).send("Internal Server Error")
}
})

router.patch('/changePassword/:id', async (req, res)=>{
        let { id } = req.params;

        // id = Number(id);

        const { password, newPassword} = req.body;

        // let user= users.find((user)=>user.id===id);

        let user = await User.findOne({_id:id});
        console.log(user);
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

        await user.save();
        res.status(200).json({
            user:user,
            message:"Password updated successfully"
        })
        

})

router.delete('/deleteUser/:id', async (req, res)=>{
    let { id } = req.params;

    // const user = users.find((user)=>user.id==id);
    const user = await User.findOneAndDelete({_id:id});

    if(!user){
        res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json({
        message:"User deleted successfully",
        user:user
    })
});


router.put('/updateUser/:id', async (req, res)=>{
    const { id } = req.params;

    const {
        name, 
        email,
        age
    } = req.body;
// userfimd
    // if(name){
        // user.name = name;
    // }

    const user = await User.findByIdAndUpdate(id, {
        name, 
        email, 
        age
    }, 
{
    //if the user doesnt exist, but you need to create the user 
    // upsert:true,
    new:true, 
    //return the update user
    runValidators:true, 
    // to validate the updated data 
})

if(!user){
    return res.status(404).json({
        message:"User not found"
    })
}

res.status(200).json({
    message:"User updated successfully",
    user:user
})


})


export default router;
