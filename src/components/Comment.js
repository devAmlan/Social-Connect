import './Comment.css'
const Comment = ({postcomments,commenter}) => {
    return ( 
        <>
        <div className="comment">
        <img src={commenter} alt="user" className="commenter"/>
        <p className="postcomment">{postcomments}</p>
        </div>
        </>
     );
}
 
export default Comment;