import React from "react";

import { IoMdMenu } from "react-icons/io";

import TotalValue from "@components/totalValue/TotalValue.jsx";

import style from "./Header.module.css";

function Header(){
    return(
        <header className={style.header}>
            <TotalValue/>
            <IoMdMenu/>
        </header>
    )
}

export default Header;