import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import {Link} from 'react-router-dom'
import './TopNav.css'
const TopBar = () => {
    const [user,] = useContext(AuthContext).user;

    return ( 
        <>
        <div className="topbar">
        <h3>Amlan Social</h3>
        <Link to="/profile">
        {user ? <img src={user.photoURL} alt="" className="profile"/> : <p></p>}
        </Link>
        </div>
        
        </>
     );
}
 
export default TopBar;