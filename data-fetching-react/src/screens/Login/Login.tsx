import React, { useState } from "react";

import "./Login.css";

interface Props {
  onLogin: () => void;
}

export const Login = (props: Props) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFormState((previousState) => {
      const target = event.target as HTMLInputElement;

      return {
        ...previousState,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.onLogin();
  };

  return (
    <div className="login-screen">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>

        <div className="input-row">
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
            placeholder="Your username"
          />
          {/* <p className="error">Please enter your username</p> */}
        </div>

        <div className="input-row">
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            placeholder="Your password"
          />
        </div>

        <button
          type="submit"
          disabled={
            formState.username.length == 0 || formState.password.length == 0
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};
