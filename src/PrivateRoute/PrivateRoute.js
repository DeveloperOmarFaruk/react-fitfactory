import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, location }) => {
  const { userInfo } = useAuth();

  if (userInfo.email) {
    return children;
  } else {
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  }
};

export default PrivateRoute;
