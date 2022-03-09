import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// falta useState para guardar la info del mail i passwprd
// funcion que se ejecute cuando haga onclick en el boton login=> hara un fetch a mi api (url del insomnia)
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(
      "https://3001-orosell666-validationfla-mro22gs90st.ws-eu34.gitpod.io/api/token",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status == true) {
          localStorage.setItem("token", JSON.stringify(data));
          history.push("/private");
        }
      });
  }
  // funcion que llame al fetch que la llamo al onclick del button

  function sideIn() {}
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark mt-3 "
          disabled={!validateForm()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
