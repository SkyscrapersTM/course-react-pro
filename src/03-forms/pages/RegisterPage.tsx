import { FormEvent } from "react";
import useForm from "../hooks/useForm";
import "../styles/styles.css";

function RegisterPage() {
  const { formData, isValidEmail, handleOnchage, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { name, email, password, repeatPassword } = formData;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={(e) => handleOnSubmit(e)} noValidate>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleOnchage}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>required name</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleOnchage}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>invalid email</span>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleOnchage}
        />
        {password.trim().length <= 0 && <span>required password</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>password must be at least 6 characters long</span>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleOnchage}
        />
        {repeatPassword.trim().length <= 0 && <span>required password</span>}
        {password.trim().length > 0 && password !== repeatPassword && (
          <span>passwords do not match </span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
