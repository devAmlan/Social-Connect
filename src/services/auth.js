import { auth,provider } from "../config/firebase";

export const signInWithGoogle = async() =>{

  let user;
  await auth.signInWithPopup(provider).then((resp)=>{
    user = resp.user;
    // console.log(user.uid)
    // const token =  Object.entries(user)[5][1].b
     
  }).catch((error)=>{console.log(error)});
  return user;
}
