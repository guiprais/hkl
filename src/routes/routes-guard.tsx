import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ROUTES } from "../constants/routes";
import { useAuth } from "../hooks/useAuth";

export const RoutesGuard: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { isLogged } = useAuth();
  const location = useLocation();

  if (!isLogged && location.pathname !== ROUTES.AUTH.LOGIN) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  return children || <Outlet />;
};
