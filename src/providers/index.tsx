import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { UserProvider } from "../hooks/useUsers";
import AppTheme from "../lib/material/AppTheme";
import { queryClient } from "../lib/query-client";
import { router } from "../routes";

export const AppProviders = ({ ...props }) => {
  return (
    <AppTheme {...props}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </QueryClientProvider>
    </AppTheme>
  );
};
