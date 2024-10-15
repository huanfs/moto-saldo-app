import React from "react";

import style from "./MonthBtn.module.css";

function MonthBtn({ monthNameShort }){
    return(
        <input 
        type="button" 
        value={monthNameShort}
        className={style.monthBtn}/>
    )
}

export default MonthBtn;