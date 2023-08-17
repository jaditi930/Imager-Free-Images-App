export default function Tags(props){
return (
    <div className="tag" id={props.id}>
        {props.name}
    <button onClick={(e)=>{props.removeTag(props.id)}}>X</button>
    </div>
)
}