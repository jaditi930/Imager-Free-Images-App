const asyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const signUpUser=asyncHandler(async (req,res)=>{
    return res.status(200).json({"message":"User Created Successfully"})
})

const loginUser=asyncHandler(async (req,res)=>{
    return res.status(200).json({"message":"User Logged in Successfully"})
})

const getImages=asyncHandler(async (req,res)=>{
    return res.status(200).json({"message":"Images loaded Successfully"})
})

module.exports={signUpUser,loginUser,getImages};