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
    <div className="mx-auto">
      <div className="text-center col-4 mt-5">Private Area</div>
    </div>
  );
};
