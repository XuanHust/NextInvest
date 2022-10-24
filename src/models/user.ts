import { UserRole } from "../contants/enum";
import { Query } from "./common";

export interface UsersParams extends Query {
  active?: number,
  role?: UserRole,
  name?: string
}

export interface UsersInputParams {
  id: any,
  email: string,
  name: string,
  phoneNumber: string,
  role: UserRole,
  active: number,
  page: number,
  username: string,
  newPassword: string
}

export interface UsersInputUpdateParams extends Partial<UsersInputParams> { }