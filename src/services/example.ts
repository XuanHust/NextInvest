import { CommonResponse } from "../models/common";

import { deleteAsync, getAsync, patchAsync, postAsync } from "./request";

const exampleAPI = {
  getExample(params: any): Promise<CommonResponse> {
    const url = "/v1/example";
    return getAsync(url, params);
  },

  getExampleById(id: number): Promise<CommonResponse> {
    const url = `/v1/example/${id}`;
    return getAsync(url);
  },

  createExample(params: any): Promise<CommonResponse> {
    const url = "/v1/example";
    return postAsync(url, params);
  },

  updateExample(id: number, params: any): Promise<CommonResponse> {
    const url = `v1/example/${id}`;
    return patchAsync(url, params);
  },

  deleteExampleById(id: number): Promise<CommonResponse> {
    const url = `/v1/example/${id}`;
    return deleteAsync(url);
  }
}

export default exampleAPI;
