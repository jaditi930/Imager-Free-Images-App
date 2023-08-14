const asyncHandler=require("express-async-handler")
const jwt=require("jsonwebtoken")
const test = require('dotenv').config()

const validateToken=asyncHandler(async (req,res,next)=>{
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    secret_key=test.parsed['SECRET_KEY']
    if (!token) {

        res.status(400).json({"error":"User is not authorized or token is missing"});
      }

    jwt.verify(token,secret_key, (err, decoded) => {
      if (err) {
        console.log(err.message)
        res.sendStatus(401);
      }

      console.log("user validated")
      req.user = decoded.user;
      next();
    });
  }
  else{
    res.status(400).json({"error":"User is not authorized or token is missing"});

  }
  
})
module.exports = validateToken;