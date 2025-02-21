import { LoginForm, RegistrationForm } from "@/components";
import "./login.css";

const Login = () => {
  return (
    <main className="loginLayout">
      <div className="mainLogin">
        <input className="auth-input" type="checkbox" id="chk" aria-hidden="true" />
        <RegistrationForm />
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
