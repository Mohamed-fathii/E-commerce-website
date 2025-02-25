import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContext } from "utils/context";

const ProtectedRoute = ({ children }) => {
  const { user, isAdmin, loading } = useContext(MainContext);

  if (loading) {
    return <div className="cart__message">Loading...</div>;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
