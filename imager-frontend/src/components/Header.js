import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import  axios  from 'axios'

export default function Header(props){
    const [searchQuery,setQuery]=useState("")
    async function searchImages(searchQuery){
        props.setloader("block")
        let response=await axios.get(`https://imager-api.onrender.com/${searchQuery}`)
        props.setImages(response.data.images)
        props.setloader("none")
      }
    return (
    <>
        <div className="heading">Imager - Download free images</div>
     <div className='input'>
     <input type="text" name="Search" className="search" placeholder="Search images ..." onChange={(e)=>
setQuery(e.target.value)}/>
    <span><FontAwesomeIcon icon={faSearch} size='2xl' style={{marginLeft:"0.5rem",marginBottom:"0.5rem",cursor:"pointer"}} 
    onClick={()=>{searchImages(searchQuery)}}/></span>
    </div>
    </>
    )
}