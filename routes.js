const express=require("express")

const router=express.Router();

const {signUpUser,loginUser,}=require("./controllers/user")
const {getImages,uploadImage,searchImages}=require("./controllers/image")
const validateToken=require("./middleware/token")

router.post("/signup",signUpUser)

router.post("/login",loginUser)

router.post("/upload",validateToken,uploadImage)

router.get("/",getImages)

router.get("/:query",searchImages)
module.exports = router;
