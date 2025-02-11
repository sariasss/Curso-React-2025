import { useState } from "react";
import { useContext } from "react";

import { createContext } from "react";

const AuthContext = createContext()

export const AuthProvaider = ({children}) => {
    const [isAuthenticated, setAuthenticated] = useState(false)

    const login = () =>{
        setAuthenticated(true);
        localStorage.setItem("autenticado", true)
    }

    const logOut = () => {
        setAuthenticated(false)
        localStorage.removeItem("autenticado")
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuth no es correcto")
    }
    return context;
}