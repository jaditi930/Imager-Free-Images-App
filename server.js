const express=require("express")
const dotenv=require("dotenv").config()     //place it before declaring express app 

const app=express()
const port=process.env.PORT


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
