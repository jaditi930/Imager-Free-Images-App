const mongoose=require("mongoose")
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = mongoose.Schema(
    { 
      username: {
        type: String,
        unique: [true,"Username already taken"],
        required: [true, "Username is required"],
      },
      email:{
        type: String,
        unique: [true,"Username already taken"],
        required: [true, "Username is required"],
        lowercase: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      },
      password: {
        type:String,
        required: [true, "Password is required"],
      },
    },{
      timestamps:true
    }
  );
  mongoose.connect(
    "mongodb://0.0.0.0:27017/mydb"
  )
  module.exports = mongoose.model("User", userSchema);