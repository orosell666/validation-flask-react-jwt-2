import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
// falta useState para guardar la info del mail i passwprd
// funcion que se ejecute cuando haga onclick en el boton login=> hara un fetch a mi api (url del insomnia)




const Login = () => {
  const { actions, store } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


  function sideIn() { }
  return (
    <div className="container">
      <form>
        <div >
          <label htmlFor="formGroupExampleInput" className="form-label text">Email</label><br />
          <input
            className="col-2"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group ">
          <label htmlFor="formGroupExampleInput" className="form-label text mt-2">Password</label><br />
          <input
            className="col-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button
          type="button"
          className="btn btn-primary col-2 mt-3 "
          //disabled={!validateForm()}
          onClick={() => {
            actions.generateToken(email, password)
            if (store.respuesta.token) history.push("/private")
          }}
        >
          Submit
        </button>

        {store.respuesta.message ? <div className={`alert alert-${store.respuesta.color}`} role="alert">
          <h4 className="alert-heading col">Well done {store.respuesta.name}!</h4>
          <p>You can access to you private area</p>
          <p>by clicking  submit button again!</p>
          <hr />
          <p className="mb-0">{store.respuesta.message}</p>
        </div>

          : ""}


      </form>
    </div>
  );
};
export default Login;
