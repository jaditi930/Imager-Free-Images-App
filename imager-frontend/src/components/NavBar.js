import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser,faCameraRetro,faUserPlus, faSdCard } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
export default function NavBar(props){
    return (
        <nav id="navbar">
        
        <span className="navbar_items">
        <Link to="/" onClick={props.loadImages}>
            Imager
        <FontAwesomeIcon icon={faCameraRetro} style={{marginLeft:"0.5rem"}}/>
        </Link>
        </span>

        <span className="navbar_items">
        <Link to="/upload">
            Upload an Image
        <FontAwesomeIcon icon={faSdCard} style={{marginLeft:"0.5rem"}}/>
        </Link>
        </span>

        <Link to="/login" style={{textDecoration:"none",marginLeft:"auto"}}>
        <span className="navbar_items">Login
        <FontAwesomeIcon icon={faUser} style={{marginLeft:"0.5rem"}}/>
        </span>
        </Link>

        <Link to="/signup" style={{textDecoration:"none"}}>
        <span className="navbar_items">SignUp
        <FontAwesomeIcon icon={faUserPlus} style={{marginLeft:"0.5rem"}}/>
        </span>
        </Link>


        </nav>
    )
}