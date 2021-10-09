import { createContext, useState } from "react";
export const AuthContext = createContext()

export const AuthContextProvider = (props) =>{
    const [user,setUser] = useState(null)

    return(
     <AuthContext.Provider value={{user: [user,setUser]}}>
     {props.children} 
     </AuthContext.Provider>
    )
}