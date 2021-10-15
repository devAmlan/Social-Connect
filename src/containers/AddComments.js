import { useState,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { db } from '../config/firebase'
const AddComments = ({id}) => {
    const [comments,setComments] = useState("")
    const [commentArray,] = useState(comments?comments:[])
    const [user,] = useContext(AuthContext).user;
    const addCommentHandler = ()=>{
        if(comments !== ""){
            commentArray.push({
                comment:comments,
                username:user.photoURL
            })
            db.collection("posts").doc(id).update({
               comments:commentArray
            }).then(()=>{
             setComments("")
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    return ( 
        <>
        <textarea placeholder="Write a Comment"
        onChange={(e)=>{setComments(e.target.value)}}
        ></textarea>
        <button onClick={addCommentHandler}>Post</button>
        </>
     );
}
 
export default AddComments;