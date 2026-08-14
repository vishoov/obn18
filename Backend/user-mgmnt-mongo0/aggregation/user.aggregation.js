import express from 'express';

const router = express.Router();

import User from '../model/user.model.js';


router.get("/groupByAge", async (req, res)=>{
    // group  based on ages 
    //sort 
    // project count?, age? , remove?

    const data = await User.aggregate([
        {
            //stage 1 
            $group:{
                _id:"$age",
                count:{
                    $sum: 1
                }
            }
        },
        {
            $project:{
                age:"$_id",
                _id:0,
                count:1


            }
        },
        {
            $sort:{
                count:-1
            }
        }
    ]);

    res.json({
        data
    })

})


router.get("/yearlySignup", async (req, res)=>{
    try{
        const result = await User.aggregate([
            {
                $group:{
                    _id:{

                            $year:"$createdAt"
                            // year, month, hour, dayOfWeek, week, dayOfYear, minute, second, dayOfMonth
                        
                    },
                    newUsers:{
                        $sum:1
                    }
                }
            },
          
        ])

        res.json({
            result
        })
    }
    catch(err){
        res.send(err.message)
    }
})


router.get("/addFields", async (req, res)=>{
    const result = await User.aggregate([
        {
            $addFields:{
                signupYear:{
                    $year:"$createdAt"
                },
                signupMonth:{
                    $month:"$createdAt"
                },
                signupHour:{
                    $hour:"$createdAt"
                }
            }
        }
    ]);

    res.json({
        result
    })
})

export default router;