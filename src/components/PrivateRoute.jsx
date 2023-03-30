import React from "react";
import { Jwt } from "jsonwebtoken";
import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ element: Component, ...rest }) {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && verifyToken(token);
  };

  const verifyToken = (token) => {
    try {
      const decoded = Jwt.verify(token, "your-secret-key");
      return decoded.exp > Date.now() / 1000;
    } catch (err) {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}
