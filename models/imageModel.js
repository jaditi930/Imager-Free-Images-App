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
      },
      path: {
        type: String,
        required: [true, "Path is required"],
      },
    },{
      timestamps:true
    }
  );
  module.exports = mongoose.model("Image", imageSchema);