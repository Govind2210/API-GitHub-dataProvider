const express = require("express");
const router = express.Router();
const user = require('../Model/User');
const DataFacher = require('../FetchingData');
const frd = require("../Model/Friends")

router.delete("/api/delete/:username",async (req,res)=>{
    const {username} = req.params;
    try {
        const Myuser = await user.findOne({login:username});
        if(!Myuser){
            res.status(300).json({
                status:"Failed",
                message:"No user found with given username"
            });
            return;
        }
        const deleteUser = await user.deleteOne({login:username});
        const deleteMutual = await frd.deleteOne({username});
        res.status(201).json({
            status:"Success",
            message:"User getting  successfully"
        });
    } catch (error) {
        res.status(400).json({
            status:"Failed Status",
            message:error.message
        });
    }
})


module.exports = router;