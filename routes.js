const express=require("express")

const router=express.Router();

const {signUpUser,loginUser,getImages,uploadImage}=require("./controllers")

router.post("/signup",signUpUser)

router.post("/login",loginUser)

router.post("/upload",uploadImage)

router.get("/",getImages)

module.exports = router;
