export interface CommonResponse {
  status?: "success" | "error";
  statusCode: number;
  message?: string;
  data?: any;
}

export interface Query {
  _q?: string | null;
  page?: number;
  size?: number;
}