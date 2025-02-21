import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginValidator } from "@/validators";
import { useAppDispatch, login as LoginAction } from "@/redux";
import { login } from "@/services/auth.service";

export const LoginForm = () => {
  const dispatch = useAppDispatch();

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
    <div className="login">
      <form onSubmit={handleSubmit(handleLogin)}>
        <label className="auth-label" htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input className="auth-input" type="text" placeholder="Username" {...registerInput("email")} />
        {errors.email && touchedFields.email && <p>{errors.email.message}</p>}
        <input className="auth-input" type="password" placeholder="Password" {...registerInput("password")} />
        {errors.password && touchedFields.password && <p>{errors.password.message}</p>}
        <button className="auth-button">Login</button>
      </form>
    </div>
  );
};
