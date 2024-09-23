import { api } from "../../lib/axios";

export interface ICreateUserBody {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  address?: string;
}

export async function createUser(body: ICreateUserBody) {
  const { data } = await api.post("/users", body);

  return data;
}
