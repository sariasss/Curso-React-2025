import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import AdminLayout from "../layout/AdminLayout";
import RootLayout from "../layout/RootLayout";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
        children: [ //2 hijos, para renderizarlos necesito outlet
            {
                index:true,
                element: <Login/>
            },
            {
                path: "admin",
                element: (
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                ),
                children: [
                    {

                    },
                ]
            }
        ]
    }
])