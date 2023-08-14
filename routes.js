const express=require("express")

const router=express.Router();

const {signUpUser,loginUser,getImages,uploadImage}=require("./controllers")
const validateToken=require("./middleware/token")

router.post("/signup",signUpUser)

router.post("/login",loginUser)

router.post("/upload",validateToken,uploadImage)

router.get("/",getImages)

module.exports = router;
