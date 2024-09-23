import { zodResolver } from "@hookform/resolvers/zod";
import { Box, FormControl, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { useCreateUser } from "../../../../../hooks/useCreateUser";
import { StyledButton } from "../StyledBox";
import { defaultValues, FormSchema, formSchema } from "./form-schema";

export const UserForm = () => {
  const { mutateAsync: createUser } = useCreateUser();

  const { control, handleSubmit, reset } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: FormSchema) => {
    await createUser(data);
    reset(defaultValues);
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
