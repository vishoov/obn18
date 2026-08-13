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



export default router;