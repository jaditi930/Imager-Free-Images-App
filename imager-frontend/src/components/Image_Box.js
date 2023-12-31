import Image from "./Image";

export default function Image_Box(props){
    let images=props.images;
    let display=(props.display==="none")?"flex":"none";
    // const [currentImage,setCurrentImage]=useState("")
    
    let imgs_box1=[],imgs_box2=[],imgs_box3=[];
    for(let i=0;i<images.length;i++){
        let trn=(i%3)+1;
        switch(trn)
            {
                case 1:imgs_box1.push(images[i]);
                        break;
                case 2:imgs_box2.push(images[i]);
                        break;
                case 3:imgs_box3.push(images[i]);
                        break;
                default: 
            } 
    }
    let imgs_1=imgs_box1.map((image)=>{
        return <Image image={image}/>
    })
    let imgs_2=imgs_box2.map((image)=>{
        return <Image image={image}/>
    })
    let imgs_3=imgs_box3.map((image)=>{
        return <Image image={image}/>
    })
    return (
    <div id="image_box" style={{display:display}}>

            <div id="img_box1">{imgs_1}</div>
            <div id="img_box2">{imgs_2}</div>
            <div id="img_box3">{imgs_3}</div>

     </div>
    )
}