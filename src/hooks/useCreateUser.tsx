import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { createUser, ICreateUserBody } from "../api/users/create-user";
import { USERS } from "../constants/queries";

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
