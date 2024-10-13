import React from "react";

import style from "./WeekBtn.module.css";

function WeekBtn({ weekDay }){
    return(
        <input 
        type="button" 
        value={weekDay}
        className={style.weekBtn}/>
    )
}

export default WeekBtn;