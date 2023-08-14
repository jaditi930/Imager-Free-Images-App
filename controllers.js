const asyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const User=require("./models/userModel")
const Image=require("./models/imageModel")



const signUpUser=asyncHandler(async (req,res)=>{
    console.log(req.body)
    const {username,email,password}=req.body
    const userAvailable = await User.findOne({ username:username });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
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

const loginUser= asyncHandler(async (req,res)=>{
    const {username,password}=req.body
    if(!username||!password)
    {
        res.status(400)
        throw new Error("Please enter username and password")
    }
    const user=await User.findOne({username:username})
    const usr=await User.findOne({email:username})
    if(!user && !usr)
    {
        res.status(404)
        throw new Error("Username does not exist")
    }
    const hashed_password=await bcrypt.compare(password,user.password)
    if(!hashed_password)
    {
        res.status(400)
        throw new Error("Username or password is wrong")
    }
    const accessToken=jwt.sign({
        user:{
            username:user.username
    }},process.env.SECRET_KEY,{
        expiresIn:"1h"
    })
    res.status(200).json({"token":accessToken});
})

const getImages=asyncHandler(async (req,res)=>{
    const images=await Image.find()
    return res.status(200).json({"images":images})
})

const uploadImage=asyncHandler(async (req,res)=>{
    console.log(req.user.username)
    const { image } = req.files;
    
    if (!image) return res.sendStatus(400);
    const newImage=await Image.create({
        title:image.name,author:req.user.username
    })
    console.log(newImage)

    image.mv(__dirname + '/static/images/'+image.name);

    return res.status(200).json({"message":"Image uploaded Successfully"})
})

module.exports={signUpUser,loginUser,getImages,uploadImage};