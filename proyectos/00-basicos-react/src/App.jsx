import Contador from "./components/UseStage/Contador"
import ContadorDoble from "./components/UseStage/ContadorDoble"
import ContinuacionNumeros from "./components/UseStage/ContinuacionNumeros"
import GuitarHeroe from "./components/UseStage/GuitarHeroe"
import RegistrarFormulario from "./components/UseStage/RegistrarFormulario"

const App = () => {
  return (
    <>
    <div className="text-3xl font-bold underline">Hola Mundo</div>
    <Contador />
    <hr className="mt-10"/>
    <ContadorDoble />
    <hr className="mt-10"/>
    <ContinuacionNumeros/>
    <RegistrarFormulario/>
    <GuitarHeroe/>
    </>
    
  )
}

export default App
