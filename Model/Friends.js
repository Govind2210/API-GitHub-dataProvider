const mongoose = require('mongoose');

const MyFrdSchema = new mongoose.Schema({
    username: {type : String , unique : false},
    mutual:Array
})

module.exports = new mongoose.model("Friends",MyFrdSchema);