export interface ApiResponse<T> {
  isSuccess: boolean;
  value: T;
  hasWarnings?: string[];
  hasErrors?: string[];
}

export interface ApiResponseList<T> {
  isSuccess: boolean;
  items: T[];
  hasWarnings?: string[];
  hasErrors?: string[];
}

export interface AuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
