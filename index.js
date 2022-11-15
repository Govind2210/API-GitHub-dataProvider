const express = require('express');
require("dotenv").config();

const mongoose = require('mongoose')
const Add = require("./Routes/AddingUser");
const Del = require("./Routes/DeletingUser");
const Updat = require("./Routes/UpdatingUser");
const getting = require("./Routes/GettingUser")


const app = express()
DATABASE = 'mongodb://Govind:Gogo1234@ac-wlkamwa-shard-00-00.isjbuox.mongodb.net:27017,ac-wlkamwa-shard-00-01.isjbuox.mongodb.net:27017,ac-wlkamwa-shard-00-02.isjbuox.mongodb.net:27017/UserAPI?ssl=true&replicaSet=atlas-fuhds9-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = process.env.PORT || 8080

//MiddleWares
app.use(express.json())

// Database Connections
mongoose.connect(DATABASE , {
}).then(()=>{
    console.log('database is connected')
}).catch((error)=>{
    console.log(error)
})


// Api Endpoint -2
app.get('/' , (req ,res)=>{
    res.send("Hello Find Some API")
})

app.get('*' , (req ,res)=>{
    res.send("Something Went Wrong!! Try Again")
})

app.use(Add);
app.use(Del);
app.use(Updat);
app.use(getting);


app.listen(PORT , ()=>{console.log(`This Server is Running on ${PORT}`)})


