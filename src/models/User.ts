import { ICompany } from "./Company.ts";
import { IAddress } from "./Address.ts";


export interface IUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: ICompany;
  address: IAddress;
}
