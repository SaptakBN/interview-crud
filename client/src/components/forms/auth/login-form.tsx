import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginValidator } from "@/validators";
import { LoginDocument, LoginMutation, LoginMutationVariables } from "@/GraphQL/generated/graphql";
import { useAppDispatch, login as LoginAction } from "@/redux";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [login, { data, loading, error }] = useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);

  const {
    register: registerInput,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidator),
  });

  async function handleLogin(value: LoginFormData) {
    const response = await login({
      variables: {
        loginArg: value,
      },
    });
    console.log({ response, data, loading, error });
    if (response.data) dispatch(LoginAction(response.data.login));
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit(handleLogin)}>
        <label className="auth-label" htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input className="auth-input" type="text" placeholder="Username" {...registerInput("username")} />
        {errors.username && touchedFields.username && <p>{errors.username.message}</p>}
        <input className="auth-input" type="password" placeholder="Password" {...registerInput("password")} />
        {errors.password && touchedFields.password && <p>{errors.password.message}</p>}
        <button className="auth-button">Login</button>
      </form>
    </div>
  );
};
