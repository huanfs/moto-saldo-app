import React from "react";

import { RiMotorbikeFill } from "react-icons/ri";

import style from "./Loading.module.css";

function Loading(){
    return(
        <div className={style.loading}>
            <RiMotorbikeFill/>
            <span>carregando...</span>
        </div>
    )
};

export default Loading;