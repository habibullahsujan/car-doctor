import React, { useContext } from "react";
import { InfinitySpin } from "react-loader-spinner";



import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
  if (!user?.uid) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
