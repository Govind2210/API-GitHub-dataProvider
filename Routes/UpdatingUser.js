const express = require("express");
const router = express.Router();
const user = require('../Model/User');

router.put("/api/update/:username",async (req,res)=>{
    const {MYupdateUser} = req.params;
    try {
        const Myuser = await user.findOne({login:username});
        if(!Myuser){
            res.status(300).json({
                message:"No user"
            });
            return;
        }
        const MYupdateUser = await user.updateOne({login:username},req.body); 
        res.status(201).json({
            status:"Success",
            message:"User is successfully updating"
        });
    } catch (error) {
        res.status(400).json({
            message:error.message
        });
    }
})


module.exports = router;

