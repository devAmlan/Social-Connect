import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import './TopNav.css'
const TopBar = () => {
    const [user,] = useContext(AuthContext).user;
    return ( 
        <>
        <div className="topbar">
        <h3>Amlan Social</h3>
        {user ? <img src={user.photoURL} alt="" className="profile"/> : <p></p>}
        </div>
        
        </>
     );
}
 
export default TopBar;