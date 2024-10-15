import React from "react";

import style from "./DayDetails.module.css";

function DayDetails(){
    return(
        <article className={style.dayDetails}>
            <div>
                <h2>ganhos totais:</h2>
                <span>00,00</span>
            </div>
            <div>
                <h2>KM/s percorridos:</h2>
                <span>00,00</span>
            </div>
            <div>
                <h2>combustível gasto:</h2>
                <span>00,00</span>
            </div>
            <div>
                <h2>gastos totais:</h2>
                <span>00,00</span>
            </div>
            <div>
                <h2>ganho líquido:</h2>
                <span>00,00</span>
            </div>
        </article>
    )
}

export default DayDetails;