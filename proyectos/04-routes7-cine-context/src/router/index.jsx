import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ErrorPages from "../pages/ErrorPages";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
/*
import Search from "../pages/Search";
import Review from "../pages/Review";
import Favourites from "../pages/Favourites";
*/


export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout />,
        errorElement: <ErrorPages />,
        children: [{
            index:true,
            element:<Home />,
        },
        {
            path: "movies",
            element: <MovieList />
        },
        {
            path: "movie/:id",
            element: <MovieDetail />
        }
        /*,
        {
            path: "search",
            element: <Search />
        },
        {
            path: "reviews",
            element: <Review />
        },
        {
            path: "favorites",
            element: <Favourites />
        }*/
    ]
    }
])