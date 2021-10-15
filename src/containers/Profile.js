import React,{useContext} from "react";
import './Profile.css';
import ProfilePost from '../components/ProfilePost'
import { AuthContext } from '../context/AuthContext';
const Profile = () => {
    const [user,] = useContext(AuthContext).user;
    return ( 
        <>
        <h4 style={{"textAlign":"center","color":"#F5F5F5"}}>This is Your Profile area</h4>
        <div className="userdata">
        <img src={user.photoURL} alt="" className="profile-picture"/>
        <h3>{user.displayName}</h3>
        </div>
        <div className="profilearea">
         <ProfilePost/>
        </div>
        </>
     );
}
 
export default Profile;