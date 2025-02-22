import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginValidator } from "@/validators";
import { useAppDispatch, login as LoginAction } from "@/redux";
import { login } from "@/services/auth.service";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidator),
  });

  async function handleLogin(value: LoginFormData) {
    const [response, error] = await login(value);
    if (error) console.log(error);
    if (response) dispatch(LoginAction(response));
  }

  return (
    <>
      <h4 className="text-2xl font-bold text-slate-700">Login</h4>
      <form onSubmit={handleSubmit(handleLogin)} className="w-full">
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-bold text-md mb-2 text-slate-700">
              Email
            </label>
            <input
              className=" p-2 rounded-md text-xs border-2 border-slate-200 focus:outline-none"
              placeholder="Email"
              {...registerInput("email")}
            />
            {errors.email && touchedFields.email && <p className="text-red-400">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-bold text-md mb-2 text-slate-700">
              Password
            </label>
            <input
              className=" p-2 rounded-md text-xs border-2 border-slate-200 focus:outline-none"
              type="password"
              placeholder="Password"
              {...registerInput("password")}
            />
            {errors.password && touchedFields.password && <p className="text-red-400">{errors.password.message}</p>}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-violet-500 text-md text-white px-4 py-2 rounded-md cursor-pointer hover:bg-violet-400 w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center flex-col items-center w-full">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-500 border-0" />
          <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 ">Or</span>
        </div>
        <button
          className="bg-green-500 text-md text-white px-3 py-2 rounded-md cursor-pointer hover:bg-green-600 w-full"
          onClick={() => navigate("/auth/register")}
        >
          Register
        </button>
      </div>
    </>
  );
};
