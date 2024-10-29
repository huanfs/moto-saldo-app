import React from "react";

import style from "./Details.module.css";

function Details(){
    return(
        <article className={style.details}>
            <div>
                <p>ganhos totais</p>
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
        </article>
    )
}

export default Details;