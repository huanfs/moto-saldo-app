import React from "react";

import style from "./DayBtn.module.css";

function DayBtn({ dayNumber }){
    return(
        <input 
        type="text" 
        value={dayNumber}
        className={style.dayBtn}/>
    )
}

export default DayBtn;