import Tag from "./Tag";

export default function UploadImage(props){
    function removeTag(id){
        let remove_tag=document.getElementById(id)
        document.getElementById("tags").removeChild(remove_tag)

    }
    let tags=""

    let taggs=props.tags;
    // document.getElementById("tags").innerHTML=""
    tags=taggs.map((tag,index)=>{
        return <Tag name={tag} id={index} key={index} removeTag={removeTag}/>
    })
    return (<>
        <div className="form">
        <form>
            <div>
            <input 
        type="file" 
        name="image" 
        className="file"
      />
            </div>
        <div id="tags">
        {tags}
        </div>
        <div>
        <input 
          type="text" 
          name="tags" 
          placeholder="Enter tags"
          onKeyDownCapture={(e)=>{
            e.preventDefault();
            if(e.key==="Enter")
            props.setTags([...taggs,e.target.value])
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
        </>
    )
}