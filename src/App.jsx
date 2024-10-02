import React from "react";  //****REACT*/

import { BrowserRouter, Routes, Route } from "react-router-dom";    //****REACT-ROUTER*/

import { Globals } from "@context/context.jsx";    //****CONTEXT*/

//****PAGES*/
import HomePage from "@routes/HomePage.jsx";
import Enter from "@routes/Enter.jsx";
import Register from "@routes/Register.jsx";
import Config01 from "@routes/Config01.jsx";
import Config02 from "@routes/Config02.jsx";
import Config03 from "@routes/Config03.jsx";

import "./App.css";

export function App(){
  return(
    <Globals>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/enter" element={<Enter/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/config01" element={<Config01/>}/>
          <Route path="/config02" element={<Config02/>}/>
          <Route path="/config03" element={<Config03/>}/>
        </Routes>
      </BrowserRouter>
    </Globals>
  )
}