import React,{useContext} from 'react'
import './SignInButton.css'
import {FcGoogle} from 'react-icons/fc'
import { signInWithGoogle } from '../services/auth'
import { AuthContext } from '../context/AuthContext'
import {Link} from 'react-router-dom'
const SigninButton = () => {
    const [,setUser] = useContext(AuthContext).user;

    const signInHandler = async () =>{
    let authUser = await signInWithGoogle();
    if(authUser) setUser(authUser)
    }
    return ( 
        <>
        <Link to="/account">
        <div className="signinbtn" onClick={signInHandler}>
        <p><FcGoogle/> SignIn with Google</p>
       </div>
        </Link>
        </>
     );
}
 
export default SigninButton;