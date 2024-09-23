import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useForm } from "react-hook-form";

import { usePassword } from "../../../hooks/usePassword";
import { FormSchema } from "./form-schema";

interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

export default function ForgotPassword({
  open,
  handleClose,
}: ForgotPasswordProps) {
  const { savePassword, login } = usePassword();
  const { register, handleSubmit } = useForm<FormSchema>();

  const onSubmit = (data: FormSchema) => {
    savePassword(data.password);
    handleClose();
    login();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Redefinir a senha</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
      >
        <DialogContentText>Insira a nova senha.</DialogContentText>
        <OutlinedInput
          {...register("password")}
          autoFocus
          required
          margin="dense"
          id="password"
          name="password"
          placeholder="Senha"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
