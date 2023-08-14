const express=require("express")
const dotenv=require("dotenv").config()     //place it before declaring express app 

const app=express()
app.use(express.json())

const port=process.env.PORT

app.use("/",require("./routes"))

const connectDb=require("./connectDb")     //connect database
connectDb()


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
