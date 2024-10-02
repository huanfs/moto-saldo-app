import React,{ useContext } from "react";

import { Context } from "@context/Context.jsx";  //* import context

import style from "./CheckBox.module.css";

function CheckBox({ label, box }){

    const { setUserOptions } = useContext(Context);

    function SetChoice(event){
        setUserOptions((prevValue)=> ({
            ...prevValue, choice: event.target.id
        }))
    }

    return(
        <div 
        className={style.box}
        onClick={SetChoice}>
            <input type="checkbox" id={box}/>
            <label htmlFor={box}> { label } </label>
        </div>
    )
}

export default CheckBox;