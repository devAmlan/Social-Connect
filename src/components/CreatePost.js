import { useState,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { MdAddPhotoAlternate } from 'react-icons/md'
import { db,storage } from '../config/firebase'
import getRandomnum  from '../random'
import firebase from 'firebase';
import './CreatePost.css'
const CreatePost = () => {
  const [user,] =  useContext(AuthContext).user;
     const [caption, setCaption] = useState("")
     const [photo, setPhoto] = useState(null)
     const [progress, setProgress] = useState(0)
  
     const handleChange = (e) =>{
     if(e.target.files[0]){
       setPhoto(e.target.files[0])
       var selectedImage = URL.createObjectURL(e.target.files[0]);
       var imagePreview =  document.getElementById('image-preview');
       imagePreview.src = selectedImage;
       imagePreview.style.display = 'block';
      }
      
   }
     const handleUpload = (e) =>{
        if(photo){
          var imageName = getRandomnum(10);
          const uploadImage = storage.ref(`images/${imageName}`).put(photo);
          uploadImage.on("state_changed",(snapshot)=>{
           //progress function 1% 2% ...
          const uploadprogress = Math.round((snapshot.bytesTransferred/
            snapshot.totalBytes)*100);
            setProgress(uploadprogress)
          },(error)=>{
            console.log(error)
          },()=>{
             storage.ref("images").child(`${imageName}`).getDownloadURL()
             .then((imageUrl)=>{
                db.collection("posts").add({
                  caption:caption,
                  photopost:imageUrl,
                  profileUrl:user.photoURL,
                  timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                  username:user.displayName
                })
             })
          })
          setCaption("")  
          document.getElementById('image-preview').src = null;

        }

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
        <button className="uploadbtn" onClick={handleUpload}>
          {(progress === 0)?null :progress+"%"} Upload</button>
        </div>
        </>
     );
}
 
export default CreatePost;