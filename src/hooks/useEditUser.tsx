import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { editUser, IEditUserBody } from "../api/users/edit-user";
import { USERS } from "../constants/queries";

export const useEditUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: IEditUserBody) => editUser(body),
    onSuccess: () => {
      toast.success("Usuário editado com sucesso");

      queryClient.invalidateQueries({
        queryKey: [USERS],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
