import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  element: React.ReactElement;
  redirectTo?: string;
  requiresAdmin?: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("authorization_token");

  if (isAuthenticated) {
    return element;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
