const express=require("express")

const router=express.Router();

const {signUpUser,loginUser,getImages}=require("./controllers")

router.post("/signup",signUpUser)

router.post("/login",loginUser)

router.get("/",getImages)

module.exports = router;
