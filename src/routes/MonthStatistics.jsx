import React from "react";

/*components*/
    import MonthList from "@components/monthList/MonthList.jsx";
/*components*/
import style from "@styles/MonthStatistics.module.css";

function MonthStatistics(){
    return(
        <main>
            <h1>estatística mensal</h1>
            <MonthList/>
        </main>
    )
}

export default MonthStatistics;