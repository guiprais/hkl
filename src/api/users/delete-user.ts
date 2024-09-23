import { api } from "../../lib/axios";
import { IUser } from "../../types/user";

export async function deleteUser(id: string) {
  const { data } = await api.delete<IUser>(`/users/${id}`, {});
  return data;
}
