import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { createUser } from "../api/users/create-user";
import { USERS } from "../constants/queries";
import { ICreateUserBody } from "../types/user/ICreateUserBody";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ICreateUserBody) => createUser(body),
    onSuccess: () => {
      toast.success("Usuário criado com sucesso");

      queryClient.invalidateQueries({
        queryKey: [USERS],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
