import React from "react";

import style from "./CheckBox.module.css";

function CheckBox({ label, box }){
    return(
        <div className={style.box}>
            <input type="checkbox" id={box}/>
            <label htmlFor={box}> { label } </label>
        </div>
    )
}

export default CheckBox;