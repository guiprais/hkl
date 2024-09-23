import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({ required_error: "Nome é obrigatório" })
    .min(1, "Nome é obrigatório"),
  cpf: z
    .string({ required_error: "CPF é obrigatório" })
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter 11 dígitos"),
  email: z
    .string({ required_error: "Email é obrigatório" })
    .email("Email inválido"),
  phone: z
    .string({ required_error: "Telefone é obrigatório" })
    .min(10, "Telefone inválido"),
  address: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
