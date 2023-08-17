import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [searchQuery,setQuery]=useState("")
  const [images,setImages]=useState([])

  useEffect(()=>{
    let script=document.createElement("script")

    script.innerHTML=`
    function showButton(e){
      console.log("entered")
    let rect_obj=e.target.getBoundingClientRect();
      document.getElementById("dwld_btn").style.display="inline";
      document.getElementById("dwld_btn").style.top=rect_obj.top+20+"px";
      document.getElementById("dwld_btn").style.left=rect_obj.left+rect_obj.width-100+"px";
  
    }
    function removeButton(e){
      console.log("out")
      if(event.relatedTarget==null)
      return;
      if(event.relatedTarget.id!="dwld_btn")
      document.getElementById("dwld_btn").style.display="none";

    }
    `
    // e.target.style.filter="brightness(80%)"

    document.querySelector("body").insertBefore(script,document.querySelector("body").firstChild)
    let trn=0;
    async function loadImages(){
    let response=await axios.get("https://imager-api.onrender.com");
    console.log(response.data.images)
    setImages(response.data.images)
    document.getElementById("img_box1").innerHTML=""
    document.getElementById("img_box2").innerHTML=""
    document.getElementById("img_box3").innerHTML=""

    for(let image of response.data.images){
      let t=trn+1;
      document.getElementById(`img_box${t}`).innerHTML+=`
      <img src="https://imager-api.onrender.com/images/${image.path}.jpg"
      onmouseenter="showButton(event);" onmouseleave="removeButton(event);">
      `    

      trn=(trn+1)%3;
    }
    }
    loadImages();
    

    //Runs on every render
},[]);
async function searchImages(searchQuery){
  let response=await axios.get(`https://imager-api.onrender.com/${searchQuery}`)
  setImages(response.data.images)
}
  return (
    <>
     <div className="heading">Imager - Download free images</div>
     <div className='input'>
     <input type="text" name="Search" className="search" placeholder="Search images ..." onChange={(e)=>
    setQuery(e.target.value)}/>
    <span><FontAwesomeIcon icon={faSearch} size='xl' onClick={()=>{searchImages(searchQuery)}}/></span>
     </div>
     <div id="image_box">
     <button id="dwld_btn">Download</button>
     <div id="img_box1">
      </div>

      <div id="img_box2">
      </div>

      <div id="img_box3">
      </div>

     </div>
    
     </>
  );
}

export default App;
