import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Homes/Home/Home";
import Login from "../../Pages/Login/Login";
import MoreService from "../../Pages/MoreService/MoreService";
import Reviews from "../../Pages/review/Reviews";
import SignIn from "../../Pages/signIn/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import Home from "../../Pages/Home/Home";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signin',
          element:<SignIn></SignIn>
        },
        {
          path: 'checkout/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/reviews',
          element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/moreservice',
          element:<MoreService></MoreService>
        },
      ]

    }
  ]);

  export default router;