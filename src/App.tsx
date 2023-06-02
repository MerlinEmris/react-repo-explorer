import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Router from "./pages/router";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
