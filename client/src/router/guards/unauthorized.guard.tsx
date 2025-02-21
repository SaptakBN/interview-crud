import { Navigate } from "react-router-dom";

export const UnauthorizedGuard = ({ isAuthenticated, children }: Props) => (!isAuthenticated ? children : <Navigate to="/home" />);

type Props = {
  isAuthenticated: boolean;
  children: JSX.Element;
};
