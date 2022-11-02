import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Components/CheckOutPage/Checkout";
import Orders from "../Components/ConfirmedOrders/Orders";
import Home from "../Components/HomePage/Home";

import Login from "../Components/Login";
import ServiceDetails from "../Components/ServiceDetailsPage/ServiceDetails";
import SignUp from "../Components/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/serviceDetails/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><Checkout /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
      },
      { path: "/confirmOrder", element: <PrivateRoute><Orders /></PrivateRoute> },
    ],
  },
]);
