import React from "react";
import { Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes></Routes>
      <ToastContainer />
    </>
  );
}

export default App;
