import { Box } from "@mui/material"; // Importar Box para flexbox
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button"; // Importar Button
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";

import { usePassword } from "../../hooks/usePassword";
import ColorModeSelect from "../../lib/material/ColorModeSelect";

export const Header = () => {
  const { logout } = usePassword();

  return (
    <>
      <AppBar position="static" sx={{ margin: 0 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HKL
          </Typography>
          <Box display="flex" alignItems="center">
            <ColorModeSelect />

            <Button color="inherit" onClick={logout}>
              Sair
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
