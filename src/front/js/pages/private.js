import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  useEffect(() => {
    let token = localStorage.getItem("token");

  });

  return (
    <div>
      <div>
        <div className="container text-center">

          <h1>Private Area</h1>
        </div>
      </div>
      <div className="container text-center">
        <button
          className="btn btn-primary col-2 mt-5"
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
// para log out tengo que meter un onclick y dentro: localstorage.removeItem("token")=> luego usar linea 11 (hisotry push) para redireccionarme a login
