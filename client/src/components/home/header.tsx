import { LoginResponse } from "@/interfaces/login.interface";
import { logout, useAppDispatch } from "@/redux";
import { storage } from "@/services";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = ({ session }: { session: LoginResponse }) => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    storage.clearStorage();
  };
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <h1 className="text-2xl font-bold cursor-pointer">Interview CRUD</h1>
        </Link>
        <div className="flex flex-col md:flex-row md:items-center items-end  space-x-4 ">
          <span className="text-gray-600">
            <strong>{session?.user.email}</strong>
          </span>
          <button
            className="bg-white text-red-400 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
