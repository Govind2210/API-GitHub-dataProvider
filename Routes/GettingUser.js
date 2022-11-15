const express = require("express");
const router = express.Router();
const frd = require("../Model/Friends")
const user = require('../Model/User');
const DataFacher = require('../FetchingData')

router.get("/api/friend/:username", async (req, res) => {
    const { Myusername } = req.params;
    try {
      const Myexisting = await frd.findOne({ Myusername });
      if (!Myexisting) {
        const Mutual = await Findmutual(
            Myusername + "/followers",
            Myusername + "/following"
        );
        const addFriend = await frd.create({
            Myusername,
          mutual: Mutual,
        });
  
        res.status(201).json({
          status: "Success",
          friends: Mutual,
        });
        return;
      }
      res.status(200).json({
        status: "Success",
        friends: Myexisting.mutual,
      });
    } catch (error) {
      res.status(201).json({
        status: "Failed",
        message: error.message,
      });
    }
  });

module.exports = router;
