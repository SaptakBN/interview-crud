import { LoginResponse } from "@/interfaces/login.interface";
import { logout, useAppDispatch } from "@/redux";
import { storage } from "@/services";

export const Header = ({ session }: { session: LoginResponse }) => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    storage.clearStorage();
  };
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Interview CRUD</h1>
        <div className="flex flex-col md:flex-row md:items-center items-end  space-x-4 ">
          <span className="text-gray-600">
            <strong>{session?.user.email}</strong>
          </span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
