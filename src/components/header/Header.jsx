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

/*
    this component renders an head for application responsible to
    shows 'TotalValue' component and an 'BtnMenu' hamburg icon.
    the 'openMenu' state receive an boolean value to open or close 'Details' component.
*/