import express from 'express';
import User from '../model/user.model.js';
import { signToken, verifyToken } from '../auth/jwt.js';
import { cookieLogin } from '../controller/user.controller.js';


const router = express.Router();





router.post("/login_with_cookies", cookieLogin)


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
   
    // if(typeof data.name !=="String"){
    //     console.log("invalid name")
    // }
//    option:2
    // const user = await User.insertOne(data);
//  option: 3
    const user = new User({
        name:data.name,
        age:Number(data.age),
        email:data.email,
        role:data.role || "User",
        password:data.password
    });




    if(!user){
        console.log("User didnt get created")
    }


    const addedUser = await user.save();



    if(!addedUser){
        res.status(500).json({
            message:"User couldnt be created"
        })
    }
    console.log("User created")
    res.status(200).json({
        message:"User created successfully",
        user:addedUser
    })
}
catch(err){
    res.status(500).json({message:err.message})
}
})

router.post("/login", async (req, res)=>{

    try{
    // user must be existing in users array
    console.log("Login request received ");
    const {email, password} =req.body;
        console.log(email, password);



    // const user = users.find((user)=>user.email===email);
    const user = await User.findOne({email:email});


    if(!user){
        return res.status(404).json({
            message:"User not found"
        });
    }


    // if(user.password !== password){
    //     res.status(401).send("Incorrect Password");
    // }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({
            message:"Password incorrect"
        })
    }


    // token generation
    const token = signToken({
        email:user.email,
        role:user.role
    })



    return res.status(200).json({
        message:"Login Successfull",
        user:user,
        token
    })


}
catch(err){
    return res.status(500).json({
        message:"Internal Server Error"
    })
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

function authMW(req, res, next){
    
    // Bearer <token>
    // const token = authHeader.split(" ")[1];
    // console.log(token)

    const token =  req.cookies?.accessToken;
    console.log(req.cookies);


    if(!token){
        return res.status(401).json({
            error:"No token provided"
        })
    }

    try{
        const decoded = verifyToken(token);
        console.log(decoded)
        req.user=decoded; // user -> following routes 

        console.log(req.user)
        next();
    }catch(err){
        return res.status(401).json({
            error:"Invalid or expired token"
        })
    }
}

router.put('/updateUser/:id', authMW, async (req, res)=>{
    const { id } = req.params;

    const {
        name, 
        email,
        age,
        role
    } = req.body;
// userfimd
    // if(name){
        // user.name = name;
    // }

    console.log(id);
    console.log(name, email, age);


    const user = await User.findByIdAndUpdate(id, {
        name, 
        email, 
        age,
        role
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

function roleMW(req, res, next){
    if(!req.user){
        return res.status(401).json({
            error:"Not authenticated"
        })
    }

    if(req.user.role!=="Admin"){
        return res.status(401).json({
            error:"Forbidden Route: Insufficient Permissions"
        })
    }

    next();
}

router.get("/all", authMW, roleMW, async (req, res)=>{
    const users = await User.find({});
    res.json({
        users
    })
})


router.get("/roleWise", async(req, res)=>{
    try{    
        const data = await User.aggregate([
            {
                $group:{
                    _id:"$role",
                    count:{
                        $sum:1
                    }
                }
            },
            {
                $project:{
                    role:"$_id",
                    _id:0,
                    count:1

                }
            }
        ])

        res.json({
            data
        })

    }
    catch(err){
        res.send(err.message)
    }
}); 

// 0, 18, 25, 35, 45, 55
router.get("/ageGroups", async (req, res)=>{
    try{
        const result = await User.aggregate([
            {
            $bucket:{
                groupBy:"$age",
                boundaries:[0, 18, 25, 35, 45, 55],
                output:{
                    count:{
                        $sum:1
                    }
                }
            }
        }
        ]);

        res.json({
            result
        })
    }
    catch(err){
        res.send(err.message)
    }
})

router.get("/:id", async(req, res)=>{
    const id = req.params.id;
    const user = await User.find({
        _id:id
    })

    res.json({user});
})

export default router;
