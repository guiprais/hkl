import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/users/get-users";
import { USERS } from "../constants/queries";
import { IPaginatedParams } from "../types/paginated-params";

export const useGetUsers = (params?: IPaginatedParams) => {
  return useQuery({
    queryKey: [USERS],
    queryFn: () => getUsers(params),
  });
};
