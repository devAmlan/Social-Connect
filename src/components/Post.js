import React,{useState} from 'react';
import AddComments from '../containers/AddComments';
import  Comment  from '../components/Comment';
import './Post.css'
import {IoHeart} from 'react-icons/io5'
import {CgComment} from 'react-icons/cg'
const Post = ({id,caption,username,photopost,profileImage,comments}) => {
    const [showcomment, setShowcomment] = useState(false)
    const showComments = ()=>{
        (showcomment===false)?setShowcomment(true):setShowcomment(false)
    }
    return ( 
        <>
        <div className="post">
        <div className="postheader">
        <img src={profileImage} alt="" className="post_profilepic"/>
        <p className="post_username">{username}</p>
        </div>
        <div className="post_image">
            <img src={photopost} alt="" />
        </div>
        <h4 className="post_caption">{caption}</h4>
        <IoHeart className="likebtn"/>
        <CgComment className="commentbtn" onClick={showComments}/>
        {
         (showcomment===true)?
         <>
          <div className="post_addcomments">
        <AddComments id={id}/>
        </div>
        <div className="post_comments">
            {
            comments?
            comments.map((comment)=>(
                <>
                <Comment postcomments={comment.comment} 
                commenter={comment.username}/>
                </>
               ))
            :<></>
            }
        </div>
         </>
        :<></>
        }
        
        </div>
        </>
     );
}
 
export default Post;