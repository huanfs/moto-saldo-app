import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io"; //* REMOVI TEMPORARIAMENTE

import TotalValue from "@components/totalValue/TotalValue.jsx";
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