


import User from '../model/user.model.js';
import { signToken, verifyToken } from '../auth/jwt.js';



const cookieLogin = async (req, res)=>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email:email});

        if(!user){
            return res.status(404).json({
                message:"the user doesnt exist"
            })
        }

        const isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.status(401).json({
                message:"The password is incorrect"
            })
        }

        const token = signToken({
            email:user.email,
            role:user.role
        })



        res.cookie('accessToken', token, {
            httpOnly:true,
            secure:true, //httpS 
            sameSite:"strict", ///same -> strict or none
            maxAge: 15*60*1000 //15 minutes
        })


        return res.status(200).json({
            message:"User logged in successfully",
            id:user._id,
            name:user.name
        })

    }
    catch(err){
        return res.status(500).json({
            error:err.message
    })
    }
}




export {
    cookieLogin
}