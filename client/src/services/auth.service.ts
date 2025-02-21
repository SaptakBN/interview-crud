import { LoginArg, LoginResponse } from "@/interfaces/login.interface";
import { RegisterArg } from "@/interfaces/register.interface";
import { POST } from "@/lib/api/Methods";

const login = (data: LoginArg) => POST<LoginArg, LoginResponse>("/api/login", data);
const register = (data: RegisterArg) => POST<RegisterArg, LoginResponse>("/api/register", data);

export { login, register };
