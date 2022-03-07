import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Login from "../component/login";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mx-auto">
      <div className="text-center col-4 mt-5">
        <Login />
      </div>
    </div>
  );
};
