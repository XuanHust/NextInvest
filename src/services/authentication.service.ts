import { SignInParams, UserParams } from "../models/authentication";
import { CommonResponse } from "../models/common";
import { getAsync, postAsync, putAsync } from "./request";

const authenticationAPI = {
  signIn(params: SignInParams): Promise<CommonResponse> {
    const url = "/v1/auth/signIn";
    return postAsync(url, params);
  },
  signOut(): Promise<CommonResponse> {
    const url = "/v1/auth/signOut";
    return postAsync(url);
  },
  getCurrentUser(): Promise<CommonResponse> {
    const url = "/v1/users/me";
    return getAsync(url);
  },
  updateCurrentUser(params: UserParams): Promise<CommonResponse> {
    const url = "/v1/users/me";
    return putAsync(url, params);
  },
  changePassword({ newPassword }: { newPassword: string }): Promise<CommonResponse> {
    const url = '/v1/auth/changePassword'
    return postAsync(url, { newPassword })
  },
  getTeams(): Promise<CommonResponse> {
    const url = "/v1/teams"
    return getAsync(url);
  }
};

export default authenticationAPI;