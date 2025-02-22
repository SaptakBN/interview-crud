import { Navigate } from "react-router-dom";

export const AuthorizedGuard = ({ isAuthenticated, children }: Props) =>
  isAuthenticated ? children : <Navigate to="/auth" />;

type Props = {
  isAuthenticated: boolean;
  children: JSX.Element;
};
