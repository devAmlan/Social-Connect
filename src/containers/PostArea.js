import React,{ useState,useEffect } from 'react';
import './PostArea.css'
import CreatePost from '../components/CreatePost'
import { db } from '../config/firebase'
import Post from '../components/Post'
const PostArea = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
     const getPosts = async ()=>{
       db.collection("posts").onSnapshot((snapshot)=>{
          setPosts(snapshot.docs.map((doc)=>({id:doc.id,post:doc.data()})))
       })
     }
     getPosts();
    }, [])
    return ( 
        <>
        <div className="postarea">
        <CreatePost/>
        </div>
        <div className="allposts">
         {
           posts.map(({id,post})=>{
               return (
                   <Post
                   key={id}
                   caption={post.caption}
                   username={post.username}
                   profileImage = {post.profileUrl}
                   photopost = {post.photopost}
                   id={id}
                   comments ={post.comments}
                   />
               )
           })  
         }
        </div>
        </>
     );
}
 
export default PostArea;