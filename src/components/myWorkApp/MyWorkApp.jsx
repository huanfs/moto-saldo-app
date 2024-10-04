import React from "react";

import { CgMathPlus } from "react-icons/cg";  //* react-icon

import style from "./MyWorkApp.module.css";  //* stylesheet

function MyWorkApp(){
    return(
       <article className={style.container}>
        <img src="src/assets/images/ifood-logo.png"/>
        <span>99,99</span>
        <button type="button">
            <CgMathPlus/>
        </button>
       </article>
    )
}

export default MyWorkApp;