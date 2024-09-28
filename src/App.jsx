import React from "react";  //****REACT*/

import { BrowserRouter, Routes, Route } from "react-router-dom";    //****REACT-ROUTER*/

import { Globals } from "@context/context.jsx";    //****CONTEXT*/

//****PAGES*/
import HomePage from "@routes/HomePage.jsx";

import "./App.css";

export function App(){
  return(
    <Globals>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </Globals>
  )
}