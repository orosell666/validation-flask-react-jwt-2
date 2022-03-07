import React from "react";
// falta useState para guardar la info del mail i passwprd
// funcion que se ejecute cuando haga onclick en el boton login=> hara un fetch a mi api (url del insomnia)
const Login = () => {
  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">
          Email
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">
          Password
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div>
        <button type="button" class="btn btn-dark">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Login;
