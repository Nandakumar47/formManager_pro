import { Navigate } from "react-router-dom";

function PublicRoute({ component: Component, ...rest }) {
  const isAuthenticated = !!sessionStorage.getItem("accessToken");
  return isAuthenticated ? (
    <Navigate to="/home" replace />
  ) : (
    <Component {...rest} />
  );
}
export default PublicRoute;
