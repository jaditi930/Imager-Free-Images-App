import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [searchQuery,setQuery]=useState("")
  useEffect(() => {
    let response=axios.get("http://imager-api.onrender.com");
    console.log(response)

    //Runs on every render
  });
  return (
    <>
     <div className="heading">Imager - Download free images</div>
     <div className='input'>
     <input type="text" name="Search" className="search" placeholder="Search images ..." onChange={(e)=>
    setQuery(e.target.value)}/>
    <span><FontAwesomeIcon icon={faSearch}/></span>
     </div>
     </>
  );
}

export default App;
