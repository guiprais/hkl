import { z } from "zod";

export const formSchema = z.object({
  password: z.string().min(6, { message: "Senha muito curta" }),
});

export type FormSchema = z.infer<typeof formSchema>;
