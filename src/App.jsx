import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home/Home";
import Dashboard from "./Layout/Dashboard/Dashboard";
import AddProductPage from "./Pages/SellerPages/AddProductPage";
import SellerAllProduct from "./Pages/SellerPages/SellerAllProduct/SellerAllProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/sellers",
        element: <p>from sellers</p>,
      },
      {
        path: "/dashboard/users",
        element: <p>from add user</p>,
      },
      {
        path: "/dashboard/reportIteams",
        element: <p>from add user</p>,
      },
      {
        path: "/dashboard/products",
        element: <SellerAllProduct />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProductPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
