import "./App.css";
import React from "react";
import AppRoutes from "../routes/AppRoutes";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
