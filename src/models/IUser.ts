import { ICompany } from "./ICompany.ts";
import { IAddress } from "./IAddress.ts";


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
