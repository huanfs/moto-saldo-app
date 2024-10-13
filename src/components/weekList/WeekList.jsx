import React, { useState } from "react";

/*components*/
    import WeekBtn from "@components/weekList/weekBtn/WeekBtn.jsx";
/*components*/
import style from "./WeekList.module.css";

function WeekList(){

    const[week, setWeek] = useState(["seg", "ter", "qua", "qui", "sex", "sáb", "dom"]) //* manualy storaged week days

    return(
        <nav className={style.weekList}>
            {
                week.map((item, index)=>{
                    return(
                        <WeekBtn weekDay={item} key={index}/>
                    )
                })
            }
        </nav>
    )
}

export default WeekList;