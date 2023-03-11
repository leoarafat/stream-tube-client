import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import { AuthContext } from "../context/ContextProvider/ContextProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  console.log(user);

  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
