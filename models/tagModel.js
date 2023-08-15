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
  module.exports = mongoose.model("Tag", tagSchema);