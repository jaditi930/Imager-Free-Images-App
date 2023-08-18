import Tag from "./Tag";
import axios from "axios";
import { useState } from "react";

export default function UploadImage(props){
    let t=""
    const [Tags,setTags]=useState([])
    function removeTag(id){
        let remove_tag=document.getElementById(id)
        document.getElementById("tags").removeChild(remove_tag)
    }
    async function uploadImage(){
        var formData = new FormData();
        formData.append("image", document.forms[0].image.files[0]);
        formData.append("tags",document.forms[0].tags.value)
        let response=await axios.post("https://imager-api.onrender.com/upload",formData,{
          headers:{
            'Authorization':`Bearer ${props.token}`,
            'Content-Type': 'multipart/form-data'
          }
        },)
        props.setMsg(response.data.message)
        console.log(response)
      }
    let tags=Tags.map((tag,index)=>{
        return <Tag name={tag} id={index} key={index} removeTag={removeTag}/>
    })
    return (<>
        <div className="form">
        <form>
        <div className="heading" style={{fontSize:"4rem",paddingBottom:"0px"}}>Upload Image</div>
            <div>
            <input 
        type="file" 
        name="image" 
        className="file"
      >
      </input>
            </div>
        <div id="tags">
        {tags}
        </div>
        <div>
        <input 
          type="text" 
          name="tags"
          placeholder="Enter tags"
          onChange={(e)=>{t=e.target.value}}
          onKeyDownCapture={(e)=>{
            if(e.key==="Enter"){
                e.preventDefault();
            setTags([...Tags,e.target.value])
            e.target.value=""
            }
        }}
        />
        </div>
        <div>
        <button style={{width:"fit-content"}} type="submit" onClick={(e)=>{
           e.preventDefault();
            uploadImage();
            }}>Submit</button>
        </div>
        </form>
        </div>
        </>
    )
}