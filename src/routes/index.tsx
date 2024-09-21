import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/app/home";
import { SignIn } from "../pages/auth/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/app",
    element: <Home />,
  },
]);
