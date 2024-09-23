import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import AppTheme from "../lib/material/AppTheme";
import { queryClient } from "../lib/query-client";
import { router } from "../routes";

export const AppProviders = ({ ...props }) => {
  return (
    <AppTheme {...props}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster richColors />
      </QueryClientProvider>
    </AppTheme>
  );
};
