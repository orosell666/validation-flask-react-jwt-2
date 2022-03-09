import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  });

  return (
    <div>
      <div className="mx-auto">
        <div className="text-center">
          <h1>Private Area</h1>
        </div>
      </div>
      <div className="mx-auto">
        <button
          className="btn btn-info btn-lg"
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
