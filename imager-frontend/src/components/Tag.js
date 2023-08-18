export default function Tag(props){
return (
    <div className="tag" id={props.id}>
        {props.name}
    </div>
)
}
{/* <button onClick={(e)=>{props.removeTag(props.id)}}>X</button> */}
