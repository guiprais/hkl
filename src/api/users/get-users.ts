import { api } from "../../lib/axios";
import { IPaginatedParams } from "../../types/paginated-params";
import { IUser } from "../../types/user";

export async function getUsers(params?: IPaginatedParams) {
  const { data } = await api.get<IUser[]>("/users", {
    params,
  });
  return data;
}
