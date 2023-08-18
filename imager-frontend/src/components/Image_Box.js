import Image from "./Image";
import { useState } from "react";
export default function Image_Box(props){
    let images=props.images;
    let display=(props.display==="none")?"flex":"none";
    const [currentImage,setCurrentImage]=useState("")
    function showButton(e){
        setCurrentImage(e.target.id);
        let rect_obj=e.target.getBoundingClientRect();
          document.getElementById("dwld_btn").style.display="inline";
          document.getElementById("dwld_btn").style.top=rect_obj.top+20+"px";
          document.getElementById("dwld_btn").style.left=rect_obj.left+rect_obj.width-100+"px";
        }
    
    
        function removeButton(e){
          if(e.relatedTarget===null)
          return;
          if(e.relatedTarget.id!=="dwld_btn"){
          document.getElementById("dwld_btn").style.display="none";
          setCurrentImage("")
          }
        }
    
    
      function downloadImage()
      {   
        let currentURL=`https://imager-api.onrender.com/images/${currentImage}.jpg`
        fetch(currentURL)
        .then(resp =>resp.blob())
        .then(blobobject => {
            const blob = window.URL.createObjectURL(blobobject);
            console.log(blob)
            const anchor = document.createElement('a');
            anchor.style.display = 'none';
            anchor.href = blob;
            anchor.download=currentImage
            document.body.appendChild(anchor);
            anchor.click();
            window.URL.revokeObjectURL(blob);
        })
        .catch(() => console.log('An error in downloading the file sorry'));
      }
    let imgs_box1=[],imgs_box2=[],imgs_box3=[];
    for(let i=0;i<images.length;i++){
        let trn=(i%3)+1;
        switch(trn)
            {
                case 1:imgs_box1.push(images[i]);
                        break;
                case 2:imgs_box2.push(images[i]);
                        break;
                case 3:imgs_box3.push(images[i]);
                        break;
                default: 
            } 
    }
    let imgs_1=imgs_box1.map((image)=>{
        return <Image image={image} showButton={showButton} removeButton={removeButton}/>
    })
    let imgs_2=imgs_box2.map((image)=>{
        return <Image image={image} showButton={showButton} removeButton={removeButton}/>
    })
    let imgs_3=imgs_box3.map((image)=>{
        return <Image image={image} showButton={showButton} removeButton={removeButton}/>
    })
    return (
    <div id="image_box" style={{display:display}}>

         <button id="dwld_btn" onClick={downloadImage}>Download</button>

            <div id="img_box1">{imgs_1}</div>
            <div id="img_box2">{imgs_2}</div>
            <div id="img_box3">{imgs_3}</div>

     </div>
    )
}