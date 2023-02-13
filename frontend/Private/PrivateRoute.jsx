import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextApp } from "../src/context/ContextProvider";

export default function PrivateRoute({ children }) {
  const { auth } = useContext(ContextApp);
  if (!auth) {
    return <Navigate to="/" />;
  }
  return children;
}
