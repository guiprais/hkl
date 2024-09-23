import { createBrowserRouter, Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { ROUTES } from "../constants/routes";
import { Home } from "../pages/app/home";
import { SignIn } from "../pages/auth/SignIn";
import { RoutesGuard } from "./routes-guard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RoutesGuard>
        <Outlet />
      </RoutesGuard>
    ),
    children: [
      {
        path: ROUTES.AUTH.LOGIN,
        element: <SignIn />,
      },
      {
        path: "/",
        element: <Header />,
        children: [
          {
            path: ROUTES.PRIVATE,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
