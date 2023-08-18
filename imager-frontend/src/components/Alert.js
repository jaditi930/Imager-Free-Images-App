export default function Alert(props){
    let disp=(props.alertMsg=="")?"none":"flex";
    return (
        <div id="alert" style={{display:disp}}>
           <span>{props.alertMsg}</span>
           <span style={{marginLeft:"auto",marginRight:"2rem",cursor:"pointer"}}
           onClick={()=>{props.setMsg("")}}>X</span> 
    </div>
    )
}