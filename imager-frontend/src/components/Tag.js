import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function Tag(props){
return (
    <div className="tag" id={props.id}>
        {props.name}
        <span style={{marginLeft:"1rem"}} onClick={(e)=>{props.removeTag(props.id)}}>
        <FontAwesomeIcon icon={faCircleXmark} />
            </span>
    </div>
)
}
