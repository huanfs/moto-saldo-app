import React from "react";

/*icons*/
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
/*icons*/

import style from "./BtnMenu.module.css";

function BtnMenu({ option, action }){

    return(
        <button 
        type="button" 
        className={style.btnMenu}
        onClick={()=>{action(!option)}}
        style={{color: option ? "var(--Black)" : "var(--White)"}}>
            {
                option ? <IoMdClose/> : <IoMdMenu/>
            }
        </button>
    )
}

export default BtnMenu;

/*
    this component receive 'ACTION' and 'OPTIONS' props to close this component
    depending the state of 'OPTION' renders an different icon for open or closed menu.
*/