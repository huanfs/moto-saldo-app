import React from "react";

import style from "./AlertMessage.module.css";

import { RiCloseFill } from "react-icons/ri";

function AlertMessage({msg, action}){
    return(
        <div className={style.alertMessage}>
            <span>{msg}</span>
            |
            <button type="button" onClick={() => {action(false)}}>
                <RiCloseFill />
            </button>
        </div>
    )
};

export default AlertMessage;