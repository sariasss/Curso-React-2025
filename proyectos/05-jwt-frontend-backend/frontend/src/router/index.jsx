import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import RootLayaout from "../layout/RootLayaout";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayaout />,
        children: [
            {
                index:true,
                element: <Home />
            },{
                index:"login",
                element: <Login />
            },{
                index:"register",
                element: <Register />
            },{
                index:"home",
                element: <Home />
            },{
                index:"dashboard",
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                )
            }
        ]
    }
])