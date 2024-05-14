import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Orders from "../Pages/Orders/Orders/Orders";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import AdminRoute from "./AdminRoute";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

export const  router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
          },
        {
            path: "/menu",
            element:<Menu></Menu>
          },
        {
            path:`/orders/:category`,
            element:<Orders></Orders>
          },
        {
            path:`/logIn`,
            element:<LogIn></LogIn>
          },
        {
            path:`/register`,
            element:<Register></Register>
          },

      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      children:[
       {
        path:'cart',
        element:<Cart></Cart>
       },
       {
        path:'payment',
        element:<Payment></Payment>
       },
       {
        path:'userHome',
        element:<UserHome></UserHome>
       },
       {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
       }, 
       {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
       },
       {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
       },
       {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItems></UpdateItems> </AdminRoute>,
        loader:({params})=>fetch(`https://bistro-boss-server-lovat-two.vercel.app/menu/${params.id}`)
       },
       {
        path:'userHome',
        element:<UserHome></UserHome>
       },
       {
        path:'users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
       },
       {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
       }
      ]
    }
  ]);