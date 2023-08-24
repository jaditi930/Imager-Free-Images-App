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
import Alert from './Alert';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { MetaTags } from 'react-meta-tags';

function App() {

  const [images,setImages]=useState([])
  const [loader,setloader]=useState("none")
  const [token,setToken]=useState("")
  const [alertMsg,setMsg]=useState("")


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

function logout(){
  setToken("")
}

  return (
    <>
    <MetaTags>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </MetaTags>
    <BrowserRouter>
    <NavBar loadImages={loadImages}/>
    <Alert alertMsg={alertMsg} setMsg={setMsg}/>
    <Routes>
    <Route exact path="/login" element={<Login setToken={setToken} setMsg={setMsg}/>}></Route>
    <Route exact path="/signup" element={<SignUp setMsg={setMsg}/>}></Route>
      <Route exact path="/" element={[
          <Header setloader={setloader} setImages={setImages}/>,
          <ImageBox display={loader} images={images}/>,
          <Loader display={loader}/>]}
      />
    <Route exact path="/upload" element={<UploadImage setMsg={setMsg} token={token}/>}></Route>
    </Routes>
    </BrowserRouter>    
     </>
  );
}

export default App;
