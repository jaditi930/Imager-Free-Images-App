const express=require("express")
const app=express()

const dotenv=require("dotenv").config()     //place it before declaring express app 

const fileUpload = require('express-fileupload');  // for uploading images

app.use(express.json())              // to get request body

app.use(express.static('static'))               // static dir path

app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

const port=process.env.PORT

app.use("/",require("./routes"))

const connectDb=require("./connectDb")     //connect database
connectDb()


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
