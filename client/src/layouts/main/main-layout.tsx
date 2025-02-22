import { Header } from "@/components";
import { LoginResponse } from "@/interfaces/login.interface";
import { Outlet } from "react-router-dom";

const MainLayout = ({ session }: { session: LoginResponse | null }) => {
  if (session)
    return (
      <main className="bg-gray-100 font-roboto h-screen">
        <Header session={session} />
        <Outlet />
      </main>
    );
};

export default MainLayout;
