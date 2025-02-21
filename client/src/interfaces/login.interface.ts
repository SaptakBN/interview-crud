export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: "admin" | "user";
  };
}

export interface LoginArg {
  email: string;
  password: string;
}
