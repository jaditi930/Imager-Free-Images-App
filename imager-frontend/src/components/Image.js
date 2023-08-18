export default function Image(props){
    function showButton(e){
        console.log(e.target.parentElement.children[1].id)
          document.getElementById(`${e.target.parentElement.children[1].id}`).style.display="inline";
        }
        function removeButton(e){
        try{
          if(e.relatedTarget.classList.contains("dwld_btn")){
            return;
          }
        }
        catch{
        }
        document.getElementById(`${e.target.parentElement.children[1].id}`).style.display="none";
        }
      function downloadImage(e)
      {   
        let currentURL=`https://imager-api.onrender.com/images/${e.target.id}.jpg`
        console.log(currentURL)
        fetch(currentURL)
        .then(resp =>resp.blob())
        .then(blobobject => {
            const blob = window.URL.createObjectURL(blobobject);
            console.log(blob)
            const anchor = document.createElement('a');
            anchor.style.display = 'none';
            anchor.href = blob;
            anchor.download=e.target.id;
            document.body.appendChild(anchor);
            anchor.click();
            window.URL.revokeObjectURL(blob);
        })
        .catch(() => console.log('An error in downloading the file sorry'));
      }
    let src=props.image.path||props.image
    let image_src=`https://imager-api.onrender.com/images/${src}.jpg`
    return (
        <span style={{position:"relative"}}>
        <img src={image_src} 
        onMouseEnter={(event)=>{showButton(event)}}
         onMouseLeave={(event)=>{removeButton(event)}} 
         />
        <button id={src} className="dwld_btn" onClick={(e)=>downloadImage(e)}>Download</button>
        </span>
    )
}