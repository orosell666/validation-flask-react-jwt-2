import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  const [user, setUser] = useState({})
  useEffect(() => {
    let token = localStorage.getItem("token");



  });


  return (



    <div>
      <div>
        <div className="container text-center">

          <h1>Hello  {store.respuesta.name}, This is your</h1>
          <h1>Private Area</h1>
          <img className="img-fluid gifsize" src="https://coolmaterial.com/wp-content/uploads/2013/02/dots.gif"></img>
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

