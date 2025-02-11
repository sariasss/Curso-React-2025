import { useNavigate } from "react-router-dom"
import { isAuthenticated } from "../helpers/isAuthenticated";

const Home = () => {
    const navigate = useNavigate();
    const handleLogin = () =>{
        //crear una clave en el localstorage llamada token con el valor 123
        // y navitate a /dashboard
        localStorage.setItem("token", "123");
        navigate("/dashboard")
    }
  return (
    <div className="text-center">
        {!isAuthenticated() ? (
            <section>
                <h1 className="text-3xl font-bold mb-8">Bienvenido a Ejercicio 1 de React Router Dom v7</h1>
                <button 
                    className="px-4 py-2 rounded bg-blue-400 hover:bg-blue-600 text-white" 
                    onClick={handleLogin}
                >Login
                </button>

            </section>
        ):(
            <h1 className="text-3xl font-bold mb-8">Ya estas logueado</h1>
        )}
       
    </div>
  )
}

export default Home