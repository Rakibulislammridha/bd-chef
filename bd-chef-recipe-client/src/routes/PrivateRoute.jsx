import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// private route

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  // back to current page
  const location = useLocation();

  if (loader) {
    return (
      //  loader
      <Spinner
        style={{
          fontSize: "300px",
          textAlign: "center",
          marginBottom: "200px",
          marginTop: "200px",
          marginRight: "500px",
          marginLeft: "500px",
        }}
        animation="border"
        variant="warning"
      />
    );
  }

  if (user) {
    return children;
  }
  // navigate login
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
