import React from "react";

import style from "./MonthDetailsBtn.module.css";

function MonthDetailsBtn(){
    return(
        <input 
        type="button" 
        value="ver totais mensais"
        className={style.btn}/>
    )
}

export default MonthDetailsBtn;