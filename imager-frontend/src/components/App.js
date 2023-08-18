import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import ImageBox from './Image_Box'
import NavBar from './NavBar';
import Header from './Header';
import Loader from './Loader';
import SignUp from './SignUp'
import Login from './Login';
import UploadImage from './UploadImage';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


function App() {

  const [searchQuery,setQuery]=useState("")
  const [images,setImages]=useState([])
  const [currentImage,setCurrentImage]=useState("")
  const [loader,setloader]=useState("none")
  const [token,setToken]=useState("")
  const [tags,setTags]=useState([])


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
  async function loadImages(){
    setloader("block")
    let response=await axios.get("https://imager-api.onrender.com");
    setImages(response.data.images)
    setloader("none")
    }

  useEffect(()=>{
    
    loadImages();
    //Runs on every render
},[]);

async function searchImages(searchQuery){
  setloader("block")
  let response=await axios.get(`https://imager-api.onrender.com/${searchQuery}`)
  setImages(response.data.images)
  setloader("none")
}
async function login(user){
  let response=await axios.post("https://imager-api.onrender.com/login",user)
  console.log(response)
  setToken(response.data.token)
  console.log(token)
}
function logout(){
  setToken("")
}
async function signup(user){
  let response=await axios.post("https://imager-api.onrender.com/signup",user)
  console.log(response)
}
async function uploadImage(){
  var formData = new FormData();
  formData.append("image", document.forms[0].image.files[0]);
  formData.append("tags",document.forms[0].tags.value)
  console.log(token)
  let response=await axios.post("http://localhost:4000/upload",formData,{
    headers:{
      'Authorization':`Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  },)
  console.log(response)
  let variant="success";
  let alert=<Alert key={variant} variant={variant}>
            {response.data.message}
          </Alert>
}
  return (
    <>
    <BrowserRouter>
    <NavBar loadImages={loadImages}/>
    <Routes>
    <Route exact path="/signup" element={<SignUp signup={signup}/>}></Route>
      <Route exact path="/" element={[
          <Header searchQuery={searchQuery} searchImages={searchImages} setQuery={setQuery}/>,
          <ImageBox display={loader} images={images} showButton={showButton} removeButton={removeButton} downloadImage={downloadImage}/>,
          <Loader display={loader}/>]}
      />
    <Route exact path="/upload" element={<UploadImage uploadImage={uploadImage} tags={tags} setTags={setTags}/>}></Route>
    <Route exact path="/login" element={<Login login={login}/>}></Route>
    </Routes>
    </BrowserRouter>    
     </>
  );
}

export default App;
