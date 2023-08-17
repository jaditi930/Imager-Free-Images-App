const Image=require("../models/imageModel")
const Tag=require("../models/tagModel")
const {v4 : uuidv4} = require('uuid')
const asyncHandler=require("express-async-handler")


const getImages=asyncHandler(async (req,res)=>{
    const images=await Image.find()
    return res.status(200).json({"images":images})
})

const uploadImage=asyncHandler(async (req,res)=>{
    console.log(req.user.username)
    const { image } = req.files;

    if (!image) return res.sendStatus(400);
    const newImage=await Image.create({
        title:image.name,author:req.user.username,path:uuidv4()
    })
    console.log(newImage)
    const {tags}=req.body;
    for(let tag of tags){
        let findtag=await Tag.findOne(
            {
                name : tag 
            }	
        ).count();
        if (findtag>0)
        {   let imgs=await Tag.findOne({name:tag})
            let images=JSON.parse(imgs.images)
            images.push(newImage.path)
            await Tag.updateOne({"name":tag},{
                "$set": {
                  "images": JSON.stringify(images)
                }
              })

        }
        else{
            let nig=JSON.stringify([newImage.path])
            await Tag.create({name:tag,images:nig})
        }
    }
    image.mv('./'+ '/static/images/'+newImage.path+"."+newImage.title.split(".")[1]);

    return res.status(200).json({"message":"Image uploaded Successfully"})
})

const searchImages=asyncHandler(async (req,res)=>{
    let query=req.params.query
    let keywords=query.split(" ")
    let images_json=new Map()
    console.log(keywords)
    for(let keyword of keywords){
        let regex=new RegExp(`${keyword}`)
        let img_list=await Tag.find({name:{$regex: regex}})
        console.log(img_list)
        for(let image of img_list){
            let images_list=JSON.parse(image.images)
            let image_name=images_list[0]
            if(images_json.get(image_name)==undefined)
            images_json.set(image_name,1)
            else
            images_json.set(image_name,images_json.get(image_name)+1)
        }
        console.log(images_json)

    }
    const mapSort1 = new Map([...images_json.entries()].sort((a, b) => b[1] - a[1]));
    console.log(mapSort1);
    let images=new Array();
    for(let [key,value] of mapSort1){
        images.push(key)
    }
    console.log(images)
    return res.status(200).json({"images":images})

})

module.exports={getImages,uploadImage,searchImages}