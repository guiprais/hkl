import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { ROUTES } from "../../../constants/routes";
import { useAuth } from "../../../hooks/useAuth";
import ColorModeSelect from "../../../lib/material/ColorModeSelect";
import { Card } from "./components/Card";
import { SignInContainer } from "./components/SignInContainer";
import { defaultValues, FormSchema, formSchema } from "./form-schema";

export function SignIn() {
  const { password, login } = useAuth();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: FormSchema) => {
    if (data.password === password) {
      login();
      toast.success("Bem vindo!");
      navigate(ROUTES.PRIVATE);
    } else {
      toast.error("Usuário ou senha incorreta");
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect
          sx={{ position: "fixed", top: "1rem", right: "1rem" }}
        />
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextField
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={error ? "error" : "primary"}
                    sx={{ ariaLabel: "email" }}
                  />
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <FormControl>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                  </Box>
                  <TextField
                    {...field}
                    error={!!error}
                    helperText={error?.message}
                    name="password"
                    placeholder="••••••"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={error ? "error" : "primary"}
                  />
                </FormControl>
              )}
            />

            <Button type="submit" fullWidth variant="contained">
              Entrar
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
