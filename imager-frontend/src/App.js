import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [searchQuery,setQuery]=useState("")
  const [images,setImages]=useState([])
  const [turn,setTurn]=useState(0);
  var trn=0;
  useEffect(()=>{
    async function loadImages(){
    let response=await axios.get("https://imager-api.onrender.com");
    console.log(response.data.images)
    setImages(response.data.images)
    document.getElementById("img_box1").innerHTML=""
    document.getElementById("img_box2").innerHTML=""
    document.getElementById("img_box3").innerHTML=""

    for(let image of response.data.images){
      console.log(trn)
      let t=trn+1;
      console.log(document.getElementById(`img_box${t}`))
      document.getElementById(`img_box${t}`).innerHTML+=`
      <img src="https://imager-api.onrender.com/images/${image.path}.jpg">
      `    
      setTurn((turn+1)%3)
      trn=(trn+1)%3;
    }
    }
    loadImages();
    

    //Runs on every render
},[]);
  return (
    <>
     <div className="heading">Imager - Download free images</div>
     <div className='input'>
     <input type="text" name="Search" className="search" placeholder="Search images ..." onChange={(e)=>
    setQuery(e.target.value)}/>
    <span><FontAwesomeIcon icon={faSearch}/></span>
     </div>
     <div id="images_box">
      
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
