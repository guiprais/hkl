import { Box, Container, Typography } from "@mui/material";

import { UserForm } from "./components/UserForm";
import { Users } from "./components/Users";

export const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Formulário de Cadastro/Atualização
        </Typography>
        <UserForm />
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Usuários
        </Typography>
        <Users />
      </Box>
    </Container>
  );
};
