import { api } from "../../lib/axios";
import { ICreateUserBody } from "../../types/user/ICreateUserBody";

export async function createUser(body: ICreateUserBody) {
  const { data } = await api.post("/users", body);

  return data;
}
