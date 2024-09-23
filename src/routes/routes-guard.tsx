import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ROUTES } from "../constants/routes";
import { usePassword } from "../hooks/usePassword";

export const RoutesGuard: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { isLogged } = usePassword();
  const location = useLocation();

  if (!isLogged && location.pathname !== ROUTES.AUTH.LOGIN) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  return children || <Outlet />;
};
