import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(1, "O email é obrigatório")
    .email("Por favor, insira um email válido"),
  password: z.string().min(1, "A senha é obrigatória"),
});

export const defaultValues = {
  email: "",
  password: "",
};

export type FormSchema = z.infer<typeof formSchema>;
