import { CommonResponse } from "../models/common";
import { UsersInputParams, UsersInputUpdateParams, UsersParams } from "../models/user";
import { getAsync, postAsync, putAsync } from "./request";

const userAPI = {
  getUser(params?: UsersParams): Promise<CommonResponse> {
    const url = "/v1/users";
    return getAsync(url, params);
  },
  createUser(params: UsersInputParams): Promise<CommonResponse> {
    const url = "/v1/users";
    return postAsync(url, params);
  },
  updateUser(id: string, params: UsersInputUpdateParams): Promise<CommonResponse> {
    const url = `/v1/users/${id}`;
    return putAsync(url, params);
  },
  getUserById(id: string): Promise<CommonResponse> {
    const url = `/v1/users/${id}`;
    return getAsync(url);
  },
  changePasswordById(id: string, params: { newPassword: string }): Promise<CommonResponse> {
    const url = `/v1/users/changePassword/${id}`;
    return postAsync(url, params);
  }
};

export default userAPI;