import React, { useState } from "react";

import TotalValue from "@components/header/totalValue/TotalValue.jsx";
import BtnMenu from "@components/header/btnMenu/BtnMenu.jsx";
import Details from "@components/header/details/Details.jsx";

import style from "./Header.module.css";

function Header(){

    const[openMenu, setOpenMenu] = useState(false);

    return(
        <header className={style.header}>
            <TotalValue/>
            <BtnMenu option={openMenu} action={setOpenMenu}/>
            {
                openMenu && (
                    <Details/>
                )
            }
        </header>
    )
}

export default Header;