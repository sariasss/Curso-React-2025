import { createContext, useState } from "react";

const AuthContext = createContext();
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({ children }) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    //funciones en mi contexto

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

    //checkAuth --> para verificar si el usuario esta autenticado siempre que monte o renderice el componente
}