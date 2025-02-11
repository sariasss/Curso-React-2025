import { Link, Outlet, useNavigate } from "react-router-dom"
import { isAuthenticated } from "../helpers/isAuthenticated"

const RootLayout = () => {
    //hook para cerrar moverme entre rutas useNavigates
    const navigate = useNavigate();

    //funcion para cerrar sesión;
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
  return (
    <>
     <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="font-bold text-xl hover:text-gray-800">Home</Link>
                    <Link to="/Profile" className="font-bold text-xl hover:text-gray-800">Profile</Link>
                    <Link to="/Dashboard" className="font-bold text-xl hover:text-gray-800">Dashboard</Link>
                    { //pongo boton de cerrar sesion si el usuario esta loguedado
                        isAuthenticated() && ( 
                            <button 
                                className="px-4 py-2 bg-red-500 hover:bg-red-800 text-white font-bold rounded"
                                onClick={handleLogout}
                            >Cerrar sesión</button>

                         )//renderizar son parentesis
                    }
                </div>
            </div>
        </nav>
        <main className="max-w-6xl mx-auto mt-8 px-4"> 
            <Outlet />
        </main>
     </div>
    </>
   
  )
}

export default RootLayout