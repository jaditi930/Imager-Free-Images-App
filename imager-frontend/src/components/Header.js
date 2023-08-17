import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header(props){
    return (
    <>
        <div className="heading">Imager - Download free images</div>
     <div className='input'>
     <input type="text" name="Search" className="search" placeholder="Search images ..." onChange={(e)=>
    props.setQuery(e.target.value)}/>
    <span><FontAwesomeIcon icon={faSearch} size='2xl' style={{marginLeft:"0.5rem",marginBottom:"0.5rem",cursor:"pointer"}} onClick={()=>{props.searchImages(props.searchQuery)}}/></span>
    </div>
    </>
    )
}