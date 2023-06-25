import React, { useContext } from "react";
import { UserContext } from "../../AuthProvider/Authprovider";
import { Spinner } from "flowbite-react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
    return <Spinner aria-label="Extra large spinner example" size="xl" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
