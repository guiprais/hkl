import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  height: 56,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));
