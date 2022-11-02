import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loader } = useContext(AuthContext);
 

  if(loader){
    return <div>Loading..........</div>

  }
  if (!user?.uid) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
