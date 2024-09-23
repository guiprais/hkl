import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../../../../api/users/get-users";
import { USERS } from "../../../../constants/queries";

export const useGetUsers = () => {
  return useQuery({
    queryKey: [USERS],
    queryFn: () => getUsers(),
  });
};
