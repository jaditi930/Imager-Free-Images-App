const asyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const User=require("./models/userModel")


const signUpUser=asyncHandler(async (req,res)=>{
    console.log(req.body)
    const {username,email,password}=req.body
    // const userAvailable = await User.findOne({ username:username });
    // if (userAvailable) {
    //   res.status(400);
    //   throw new Error("User already registered!");
    // }
    const hashed_password=await bcrypt.hash(password,10)
    let newUser=""
    newUser= await User.create({username,email,password:hashed_password})
    if(!newUser)
    {
        res.status(400);
    throw new Error("User data us not valid");
    }
    console.log(newUser)
    res.status(200).json(newUser)
    // return res.status(200).json({"message":"User Created Successfully"})
})

const loginUser=asyncHandler(async (req,res)=>{
    return res.status(200).json({"message":"User Logged in Successfully"})
})

const getImages=asyncHandler(async (req,res)=>{
    return res.status(200).json({"message":"Images loaded Successfully"})
})

module.exports={signUpUser,loginUser,getImages};