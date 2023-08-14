const mongoose=require("mongoose")

const imageSchema = mongoose.Schema(
    { 
        author:{
            type:String,
        ref:'User'
        },
      title: {
        type: String,
        required: [true, "Title is required"],
      }
    },{
      timestamps:true
    }
  );
  mongoose.connect(
    "mongodb://0.0.0.0:27017/mydb"
  )
  module.exports = mongoose.model("Image", imageSchema);