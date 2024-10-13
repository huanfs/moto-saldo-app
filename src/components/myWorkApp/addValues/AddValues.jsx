import React from "react";

import style from "./AddValues.module.css";

function AddValues({ close, appImage }){
    return(
        <article className={style.new}>
            <img src={appImage}/>

            <input type="text" placeholder="ganhos"/>
            <input type="text" placeholder="gastos"/>
            <input type="text" placeholder="distancia"/>
            <input type="text" placeholder="horas"/>

            <span>99,99</span>
            <input 
            type="button" 
            value="adicionar"
            onClick={()=>{close(false)}}/>
        </article>
    )
}

export default AddValues;