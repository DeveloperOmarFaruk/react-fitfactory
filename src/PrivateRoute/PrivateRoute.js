import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Component/MultiComponents/Loading";

const PrivateRoute = ({ children }) => {
  const { userInfo, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (userInfo.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login" />;
  }
};

export default PrivateRoute;
