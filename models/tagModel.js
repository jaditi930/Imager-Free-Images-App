const mongoose=require("mongoose")

const tagSchema = mongoose.Schema(
    { 
        name:{
            type:String,
        },
      images: {
        type: String,
      }
    },{
      timestamps:true
    }
  );
  // mongoose.connect(
  //   "mongodb://0.0.0.0:27017/mydb"
  // )
  module.exports = mongoose.model("Tag", tagSchema);