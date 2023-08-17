import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios'
import ImageBox from './Image_Box'
function App() {
  const [searchQuery,setQuery]=useState("")
  const [images,setImages]=useState([])
  const [currentImage,setCurrentImage]=useState("")

  function showButton(e){
    console.log(e.target.src)
    setCurrentImage(e.target.src);
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
    fetch(currentImage)
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


  useEffect(()=>{
    async function loadImages(){
    let response=await axios.get("https://imager-api.onrender.com");
    // console.log(response.data.images)
    setImages(response.data.images)
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
     <ImageBox images={images} showButton={showButton} removeButton={removeButton} downloadImage={downloadImage}/>
    
     </>
  );
}

export default App;
