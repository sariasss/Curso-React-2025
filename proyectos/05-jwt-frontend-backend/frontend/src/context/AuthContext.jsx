import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({ children }) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    //funciones en mi contexto

    //checkAuth --> para verificar si el usuario esta autenticado siempre que monte o renderice el componente
    const checkAuth = async() =>{
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/auth/check-auth`, {
                credentials: "include", //para indicar que se envien las cookies al servidor
            });
            if(!response.ok){
                setIsAuthenticated(true);
                return true;
            }else{
                throw new Error("No autenticado"); 
            }
        } catch (error) {
            console.error("Error haciendo check-auth", error);
            setIsAuthenticated(false);
            return false;
        }
    }

    //login --> para iniciar sesion
    const login = async(username, password) =>{
        try {
            const response = await fetch(`${VITE_BACKEND_URL}/auth/login`,{
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({username, password}),
                credentials: "include"
            })
            if(!response.ok){
               return { sucess:false, message:"Usuario o contraseña incorrectos" };
            }
            setIsAuthenticated(true);
            return { sucess:true, message:"Usuario logueado correctamente" };
        } catch (error) {
            console.error("Error al hacer login: ", error)
        }
    }

    //logout --> para cerrar sesion

    //register -> para registrar un nuevo usuario

    //exportamos el contexto como un hook


    //provider
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
    throw new Error("useAuth debe estar dentro del proveedor AuthProvider+98/¡");
    }  
    return context;
}