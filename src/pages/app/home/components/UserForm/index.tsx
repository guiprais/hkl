import { zodResolver } from "@hookform/resolvers/zod";
import { Box, FormControl, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { StyledButton } from "../StyledBox";
import { FormSchema, formSchema } from "./form-schema";

export const UserForm = () => {
  const { control, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", gap: 2, alignItems: "start" }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl>
            <TextField
              {...field}
              fullWidth
              label="Nome"
              margin="normal"
              error={!!error}
              helperText={error?.message}
            />
          </FormControl>
        )}
      />

      <Controller
        name="cpf"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl>
            <TextField
              {...field}
              fullWidth
              label="CPF"
              margin="normal"
              error={!!error}
              helperText={error?.message}
            />
          </FormControl>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl>
            <TextField
              {...field}
              fullWidth
              label="E-mail"
              margin="normal"
              error={!!error}
              helperText={error?.message}
            />
          </FormControl>
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl>
            <TextField
              {...field}
              fullWidth
              label="Telefone"
              margin="normal"
              error={!!error}
              helperText={error?.message}
            />
          </FormControl>
        )}
      />

      <Controller
        name="address"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl>
            <TextField
              {...field}
              fullWidth
              label="Endereço"
              margin="normal"
              error={!!error}
              helperText={error?.message}
            />
          </FormControl>
        )}
      />

      <StyledButton type="submit" variant="contained" color="primary">
        Salvar
      </StyledButton>
    </Box>
  );
};
