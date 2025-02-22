import AuthLayout from "@/layouts/auth/auth-layout";
import { Navigate } from "react-router-dom";

export const UnauthorizedGuard = ({ isAuthenticated }: Props) =>
  !isAuthenticated ? <AuthLayout /> : <Navigate to="/main" />;

type Props = {
  isAuthenticated: boolean;
};
