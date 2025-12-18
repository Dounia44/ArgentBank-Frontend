import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const { token, status } = useSelector((state) => state.auth);

  if (status === "loading") {
    return null;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
