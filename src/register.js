import React, { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = user => {
  const errors = {
    username: {},
    email: {},
    password: {},
    confirmPassword: {}
  };

  const { username, email, password, confirmPassword } = user;

  if (!username) {
    errors.username.required = true;
  }
  if (!email) {
    errors.email.required = true;
  }
  if (!emailRegex.test(email)) {
    errors.email.invalid = true;
  }
  if (!password) {
    errors.password.required = true;
  }
  if (!confirmPassword) {
    errors.confirmPassword.required = true;
  }
  if (password !== confirmPassword) {
    errors.confirmPassword.invalidMatch = true;
  }

  return errors;
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = event => {
    event.preventDefault();

    const errors = validate({
      username,
      email,
      password,
      confirmPassword
    });
    alert(`Errors: ${errors}`);
  };

  return (
    <form onSubmit={register}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">
          Password (must be at least 6 characters)
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirmation">Confirm password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
