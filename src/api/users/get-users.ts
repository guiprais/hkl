import { api } from "../../lib/axios";
import { IPaginatedResponse } from "../../types/paginated-response";
import { IUser } from "../../types/user";

export async function getUsers() {
  const { data } = await api.get<IPaginatedResponse<IUser[]>>("/user", {});
  return data;
}
