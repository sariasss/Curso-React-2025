// proteccion de rutas a traves de un componente usando la funcion 
// isAuthenticated()

import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import RootLayaout from "../layouts/RootLayout";
import { isAuthenticated } from "../helpers/isAuthenticated";

const ProtectedRoute = ({ children }) => {
    //condición de autenticacion
    if(!isAuthenticated()){
        //si no esta autenticado, redirige a la página de inicio
        return <Navigate to = "/" replace={true}/>;
    }
    return children;
}
 
export const router = createBrowserRouter([
    {
        path: "/", //lo suyo es con variables
        element: <RootLayaout />,
        errorElement: <Error />,
        children: [{
            index:true, //esto significa que es al ruta por defecto
            element: <Home />
        },{
            path:"profile",
            element:(
                <ProtectedRoute>
                    <Profile/>
                </ProtectedRoute>
            )
        },{
            path: "dashboard",
            element: (
                <ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>
            )
        }
    
    
    
    ]
    }
])