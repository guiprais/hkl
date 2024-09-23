import { api } from "../../lib/axios";
import { IEditUserBody } from "../../types/user/IEditUserBody";

export async function editUser(body: IEditUserBody) {
  const { id, ...bodyWithoutId } = body;

  const { data } = await api.put(`/users/${id}`, bodyWithoutId);

  return data;
}
