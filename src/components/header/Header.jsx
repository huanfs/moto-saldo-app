import React from "react";

import { IoMdMenu } from "react-icons/io"; //* REMOVI TEMPORARIAMENTE

import TotalValue from "@components/totalValue/TotalValue.jsx";
import BtnMenu from "@components/header/btnMenu/BtnMenu.jsx";

import style from "./Header.module.css";

function Header(){
    return(
        <header className={style.header}>
            <TotalValue/>
            <BtnMenu/>
        </header>
    )
}

export default Header;