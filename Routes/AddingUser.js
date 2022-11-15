const express = require("express");
const router = express.Router();
const user = require('../Model/User');
const DataFacher = require('../FetchingData')

router.post("/api/add/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const Myuser = await user.findOne({ login: username });
      if (!Myuser) {
        const data = await DataFacher(username);
        const addUser = await user.create(data);
        console.log(addUser);
        res.status(201).json({
          status: "Success",
          user: addUser,
        });
        return;
      }
      res.status(200).json({
          status:"Success",
          messae:"User Exist",
          data:user
      });
    } catch (error) {
      console.log(error.message);
      res.status(401).json({
          status:"Failed Sataus",
          message:error.messsage
      })
    }
  });
  
  module.exports = router;
















