import React from "react";

import MonthDetailsBtn from "@components/header/details/monthDetailsBtn/MonthDetailsBtn.jsx"; //* component

import style from "./Details.module.css";

function Details(){
    return(
        <article className={style.details}>
            <div>
                <p>ganhos totais do mês</p>
                <span>00,00</span>
            </div>
            <div>
                <p>combustível gasto</p>
                <span>00,00</span>
            </div>
            <div>
                <p>KM/s percorridos</p>
                <span>00,00</span>
            </div>
            <div>
                <p>horas trabalhadas</p>
                <span>00,00</span>
            </div>
            <MonthDetailsBtn/>
        </article>
    )
}

export default Details;