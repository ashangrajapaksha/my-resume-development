
import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import Home from './components/home/Index';
import NavBar from "./components/navbar/NavBar";

import './App.scss';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <NavBar />
        <div className="content-wraper">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
