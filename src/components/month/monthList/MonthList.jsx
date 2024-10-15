import React, { useState, useEffect } from "react";

/*components*/
import MonthBtn from "@components/month/monthList/monthBtn/MonthBtn.jsx"; 
/*components*/ 

import style from "./MonthList.module.css";

function MonthList(){

    const[months, setMonths] = useState([]); //* will storage the list of months in a year

    useEffect(()=>{
        const monthsArray = [];
        for (let i = 0; i <= 11; i ++){
            const data = new Date();
            data.setMonth(i)
            monthsArray.push(data.toLocaleString("pt-br", {month: "short"}))
        }
        setMonths(monthsArray);
    },[])

    return(
        <nav className={style.monthList}>
            {
                months && (
                    months.map((item, index)=>{
                        return(
                            <MonthBtn monthNameShort={item} key={index}/>
                        )
                    })
                ) 
            }
        </nav>
    )
}

export default MonthList;