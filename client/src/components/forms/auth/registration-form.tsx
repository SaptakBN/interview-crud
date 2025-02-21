import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationFormData, registrationValidator } from "@/validators";
import { register } from "@/services/auth.service";

export const RegistrationForm = () => {
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationValidator),
  });

  const handleRegister = async (value: RegistrationFormData) => {
    const { confirmPassword, ...rest } = value;
    if (confirmPassword !== rest.password) return;

    await register(value);
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit(handleRegister)}>
        <label className="auth-label" htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input className="auth-input" type="text" placeholder="Username" {...registerInput("email")} />
        {errors.email && touchedFields.email && <p>{errors.email.message}</p>}
        <input className="auth-input" type="password" placeholder="Password" {...registerInput("password")} />
        {errors.password && touchedFields.password && <p>{errors.password.message}</p>}
        <input
          className="auth-input"
          type="password"
          placeholder="Confirm Password"
          {...registerInput("confirmPassword")}
        />
        {errors.confirmPassword && touchedFields.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button className="auth-button">Sign up</button>
      </form>
    </div>
  );
};
