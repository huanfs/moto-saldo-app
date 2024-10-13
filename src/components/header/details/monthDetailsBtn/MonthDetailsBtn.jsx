import React from "react";

import { Link } from "react-router-dom";

import style from "./MonthDetailsBtn.module.css";

function MonthDetailsBtn(){
    return(
        <Link to="/monthStatistics">
        <input 
        type="button" 
        value="ver totais mensais"
        className={style.btn}/>
        </Link>
    )
}

export default MonthDetailsBtn;