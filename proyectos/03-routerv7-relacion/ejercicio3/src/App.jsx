import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { AuthProvaider } from "./context/AuthContext"

const App = () => {
  return (
    <AuthProvaider>
      <RouterProvider router={router}/>
    </AuthProvaider>
  )
}

export default App