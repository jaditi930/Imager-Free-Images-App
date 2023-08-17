export default function Image(props){
    let image_src=`https://imager-api.onrender.com/images/${props.src}.jpg`

    return (
        <img src={image_src} id={props.src}
        onMouseEnter={(event)=>{props.showButton(event)}} onMouseLeave={(event)=>{props.removeButton(event)}} />
    )
}