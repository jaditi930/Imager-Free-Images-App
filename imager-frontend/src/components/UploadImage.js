import { useState } from "react";
import Tags from "./Tags";
export default function UploadImage(props){
    const [tags,setTags]=useState([])
    function removeTag(id){
        let remove_tag=document.getElementById(id)
        document.getElementById("tags").removeChild(remove_tag)

    }
    let taggs=tags.map((tag,index)=>{
        console.log(index)
        return <Tags name={tag} id={index} removeTag={removeTag}/>
    })
    console.log(taggs)
    return (
        <div className="form">
        <form >
            <div>
            <input 
        type="file" 
        name="image" 
        className="file"
      />
            </div>
        <div id="tags">
            {taggs}
        </div>
        <div>
        <input 
          type="text" 
          name="tags" 
          placeholder="Enter tags"
          onKeyDownCapture={(e)=>{
            if(e.key=="Enter")
            setTags([...tags,e.target.value])
        console.log(tags)
            // registerTags(e)
        }}
        />
        </div>
        <div>
        <button type="submit" onClick={(e)=>{
           e.preventDefault();
            props.uploadImage();
            }}>Submit</button>
        </div>
    </form>
        </div>
    )
}