import React from "react";

/*components*/
    import MonthList from "@components/monthList/MonthList.jsx";
    import WeekList from "@components/weekList/WeekList.jsx";
    import DayList from "@components/dayList/DayList.jsx";
/*components*/
import style from "@styles/MonthStatistics.module.css";

function MonthStatistics(){
    return(
        <main className={style.container}>
            <h1>estatística mensal</h1>
            <MonthList/>
            <section>
                <WeekList/>
                <DayList/>
            </section>
        </main>
    )
}

export default MonthStatistics;