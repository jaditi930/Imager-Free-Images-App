export default function Image(props){
    let src=props.image.path||props.image
    let image_src=`https://imager-api.onrender.com/images/${src}.jpg`
    console.log(image_src)
    return (
        <img src={image_src} id={src}
        onMouseEnter={(event)=>{props.showButton(event)}} onMouseLeave={(event)=>{props.removeButton(event)}} />
    )
}