import { LoginResponse } from "@/interfaces/login.interface";
import MainLayout from "@/layouts/main/main-layout";
import { Navigate } from "react-router-dom";

export const AuthorizedGuard = ({ isAuthenticated, session }: Props) =>
  isAuthenticated ? <MainLayout session={session} /> : <Navigate to="/auth" />;

type Props = {
  isAuthenticated: boolean;
  session: LoginResponse | null;
};
