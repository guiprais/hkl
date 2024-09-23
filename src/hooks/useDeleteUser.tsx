import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteUser } from "../api/users/delete-user";
import { USERS } from "../constants/queries";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      toast.success("Usuário deletado com sucesso");

      queryClient.invalidateQueries({
        queryKey: [USERS],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
