import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Components/Home/Home/Home";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addCoffee',
            element: <AddCoffee></AddCoffee>
        },
        {
            path: '/updateCoffee',
            element: <UpdateCoffee></UpdateCoffee>,
            loader: ()=> fetch('http://localhost:5000/coffee')
        }
      ]
    },
  ]);