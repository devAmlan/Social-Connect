import { useState } from 'react';
import { MdAddPhotoAlternate } from 'react-icons/md'
import './CreatePost.css'
const CreatePost = () => {
     const [caption, setCaption] = useState("")
     const [photo, setPhoto] = useState(null)
     const handleChange = (e) =>{
     if(e.target.files[0]){
       setPhoto(e.target.files[0])
       var selectedImage = URL.createObjectURL(e.target.files[0]);
       var imagePreview =  document.getElementById('image-preview')
       imagePreview.src = selectedImage;
       imagePreview.style.display = 'block';
    }
     }
     const handleUpload = () =>{

     }
    return ( 
        <>
        <div className="create-post">
        <p>Create Your Post</p>
        <textarea className="textpost" 
        placeholder="Enter Captions"
        value={caption}
        onChange={(e)=>{setCaption(e.target.value)}}
        >
        </textarea>
        <div className="photopost-image">
         <img src="" alt="" id="image-preview" />
        </div>
        <div className="photopost">
        <label htmlFor="fileInput">
        <MdAddPhotoAlternate className="photoicon"/>
        </label>
        <input type="file" 
        id="fileInput" 
        accept="image/*" 
        onChange={handleChange}/>
        </div>
        <button className="uploadbtn" onClick={handleUpload}>Upload</button>
        </div>
        </>
     );
}
 
export default CreatePost;