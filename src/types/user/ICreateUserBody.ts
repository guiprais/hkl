export interface ICreateUserBody {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  address?: string;
}
