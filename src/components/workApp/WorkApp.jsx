import React from "react";

import style from "./WorkApp.module.css";

export default function WorkApp({logotype, name}){
    return(
        <div className={style.application}>
            <img src={logotype} alt={name}/>
            <span>{name}</span>
        </div>
    )
}