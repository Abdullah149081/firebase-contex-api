import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { users, loading } = useContext(userContext);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <progress className="progress w-56 " />;
      </div>
    );
  }

  if (users) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoutes;
