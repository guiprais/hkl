import { api } from "../../lib/axios";

export interface IEditUserBody {
  id: number;
  name?: string;
  cpf?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export async function editUser(body: IEditUserBody) {
  const { id, ...bodyWithoutId } = body;

  const { data } = await api.put(`/users/${id}`, bodyWithoutId);

  return data;
}
