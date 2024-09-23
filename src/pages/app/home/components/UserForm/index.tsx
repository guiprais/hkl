import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { StyledButton } from "../../../../../components/StyledButton";
import { StyledFormControl } from "../../../../../components/StyledFormControl";
import { useCreateUser } from "../../../../../hooks/useCreateUser";
import { useEditUser } from "../../../../../hooks/useEditUser";
import { IUser } from "../../../../../types/user";
import { addCpfMask } from "../../../../../utils/masks/cpf-mask";
import { addPhoneMask } from "../../../../../utils/masks/phone-mask";
import { defaultValues, FormSchema, formSchema } from "./form-schema";

interface UserFormProps {
  user?: IUser;
  setUser?: (user: IUser | null) => void;
  closeDialog?: () => void;
}

export const UserForm: React.FC<UserFormProps> = ({
  user,
  setUser,
  closeDialog,
}) => {
  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: editUser } = useEditUser();

  const { control, handleSubmit, reset } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: FormSchema) => {
    if (user) {
      await editUser({ ...data, id: user.id });
    } else {
      await createUser(data);
    }

    reset(defaultValues);

    if (setUser) {
      setUser(null);
    }

    if (closeDialog) {
      closeDialog();
    }
  };

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "start",
        flexDirection: user ? "column" : "row",
      }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StyledFormControl>
            <TextField
              {...field}
              fullWidth
              label="Nome"
              margin="normal"
              error={!!error}
              helperText={error?.message}
            />
          </StyledFormControl>
        )}
      />

      <Controller
        name="cpf"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StyledFormControl>
            <TextField
              {...field}
              fullWidth
              label="CPF"
              margin="normal"
              error={!!error}
              helperText={error?.message}
              value={addCpfMask(field.value)}
            />
          </StyledFormControl>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StyledFormControl>
            <TextField
              {...field}
              fullWidth
              label="E-mail"
              margin="normal"
              error={!!error}
              helperText={error?.message}
            />
          </StyledFormControl>
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StyledFormControl>
            <TextField
              {...field}
              fullWidth
              label="Telefone"
              margin="normal"
              error={!!error}
              helperText={error?.message}
              value={addPhoneMask(field.value)}
            />
          </StyledFormControl>
        )}
      />

      <Controller
        name="address"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StyledFormControl>
            <TextField
              {...field}
              fullWidth
              label="Endereço"
              margin="normal"
              error={!!error}
              helperText={error?.message}
            />
          </StyledFormControl>
        )}
      />
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <StyledButton type="submit" variant="contained" color="primary">
          Salvar
        </StyledButton>

        {user && (
          <StyledButton
            type="button"
            variant="outlined"
            color="secondary"
            onClick={closeDialog}
          >
            Cancelar
          </StyledButton>
        )}
      </Box>
    </Box>
  );
};
