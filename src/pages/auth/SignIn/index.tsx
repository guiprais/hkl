import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";

import AppTheme from "../../../lib/material/AppTheme";
import ColorModeSelect from "../../../lib/material/ColorModeSelect";
import ForgotPassword from "../ForgotPassword";
import { Card } from "./components/Card";
import { SignInContainer } from "./components/SignInContainer";
import { FormSchema, formSchema } from "./form-schema";

export function SignIn(props: { disableCustomTheme?: boolean }) {
  const { control, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: FormSchema) => {
    console.log("🔥 ~ onSubmit ~ data:", data);
  };

  return (
    <AppTheme {...props}>
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
            Sign in
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
                    <Link
                      component="button"
                      onClick={handleClickOpen}
                      variant="body2"
                      sx={{ alignSelf: "baseline" }}
                    >
                      Esqueceu sua senha?
                    </Link>
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

            <ForgotPassword open={open} handleClose={handleClose} />
            <Button type="submit" fullWidth variant="contained">
              Entrar
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}
