import React, { useState, useRef } from "react";

/*icons*/
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
/*icons*/

import style from "./BtnMenu.module.css";

function BtnMenu(){

    const[openMenu, setOpenMenu] = useState(false);

    return(
        <button 
        type="button" 
        className={style.btnMenu}
        onClick={()=>{setOpenMenu(!openMenu)}}>
            {
                openMenu ? <IoMdClose/> : <IoMdMenu/>
            }
        </button>
    )
}

export default BtnMenu;