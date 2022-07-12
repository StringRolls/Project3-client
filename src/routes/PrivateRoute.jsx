import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { MessageContext } from "../context/message.context";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";

export default function PrivateRoute() {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const { showMessage } = useContext(MessageContext);

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    showMessage("Hi, please login or signup to enjoy Sharelicious!");
    return <Navigate to="/signup" />;
  }

  return <Outlet />;
}
