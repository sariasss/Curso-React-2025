import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const RootLayaout = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar>
        <main className="">
          <Outlet />
        </main>
      </Navbar>
    </div>
    </>
  )
}

export default RootLayaout