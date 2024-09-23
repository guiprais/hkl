import { api } from "../../lib/axios";
import { IPaginatedParams } from "../../types/paginated-params";
import { IPaginatedResponse } from "../../types/paginated-response";
import { IUser } from "../../types/user";

export async function getUsers(params?: IPaginatedParams) {
  const { data } = await api.get<IPaginatedResponse<IUser[]>>("/users", {
    params,
  });
  return data;
}
