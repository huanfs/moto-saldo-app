import React from "react";

import { Link } from "react-router-dom";

/*components*/
    import MonthList from "@components/month/monthList/MonthList.jsx";
    import WeekList from "@components/month/weekList/WeekList.jsx";
    import DayList from "@components/month/dayList/DayList.jsx";
    import DayDetails from "@components/month/dayDetails/DayDetails.jsx";
    import ArrowButton from "@components/arrowButton/ArrowButton.jsx";
/*components*/
import style from "@styles/MonthStatistics.module.css";

function MonthStatistics(){
    return(
        <main className={style.container}>
            <h1>estatística mensal</h1>
            <section>
                <MonthList/>
                <WeekList/>
                <DayList/>
                <DayDetails/>
                <Link to="/main"><ArrowButton direction="left"/></Link>
            </section>
        </main>
    )
}

export default MonthStatistics;