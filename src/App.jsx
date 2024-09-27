import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Globals } from "@context/context.jsx";

import "./App.css";

export function App(){
  return(
    <Globals>
      <BrowserRouter>
        <Routes>
          oi
        </Routes>
      </BrowserRouter>
    </Globals>
  )
}