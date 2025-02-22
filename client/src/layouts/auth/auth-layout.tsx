import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-blue-50 h-screen flex justify-center items-center">
      <div className="md:w-1/2 lg:w-1/3  bg-white rounded-lg shadow-lg flex flex-col justify-center items-center m-6 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
