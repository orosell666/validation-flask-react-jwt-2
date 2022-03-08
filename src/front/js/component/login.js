import React, { useState } from "react";
// falta useState para guardar la info del mail i passwprd
// funcion que se ejecute cuando haga onclick en el boton login=> hara un fetch a mi api (url del insomnia)
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email </label>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark mt-30,block"
          disabled={!validateForm()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
