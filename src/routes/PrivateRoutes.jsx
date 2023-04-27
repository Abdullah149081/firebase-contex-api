import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { users } = useContext(userContext);
  if (users) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoutes;
