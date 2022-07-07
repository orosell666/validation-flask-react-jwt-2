import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";







export const SignUp = () => {
  const { actions, store } = useContext(Context);
  const [user, setUser] = useState({})
  let history = useHistory();

  const changeData = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col mt-2">
            <label htmlFor="formGroupExampleInput" className="form-label text">Email</label>
            <input type="text" className="form-control text-mute" placeholder="name@web.com" aria-label="First name" name="email" onChange={(e) => changeData(e)} />
          </div>
          <div className="col mt-2">
            <label htmlFor="formGroupExampleInput" className="form-label text">Contraseña</label>
            <input type="text" className="form-control text-mute" placeholder="Contraseña" aria-label="Last name" name="password" onChange={(e) => changeData(e)} />
          </div>
        </div>
        <div className="row">
          <div className="col mt-2">
            <label htmlFor="formGroupExampleInput" className="form-label text">Nombre</label>
            <input type="text" className="form-control text-mute" placeholder="Nombre" aria-label="First name" name="name" onChange={(e) => changeData(e)} />
          </div>
          <div className="col mt-2">
            <label htmlFor="formGroupExampleInput" className="form-label text">Apellidos</label>
            <input type="text" className="form-control text-mute" placeholder="Apellidos" aria-label="Last name" name="lastName" onChange={(e) => changeData(e)} />
          </div>
        </div>
        <div className="row justify-content-center">


          <button

            type="button"
            className="btn btn-primary mt-3 col-3"
            data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
              actions.generateRegister(user)

            }}>Enviar</button></div>

      </div>
    </div>
  );
};
