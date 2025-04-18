import React,{ useContext, useState } from "react";

import { Context } from "@context/Context.jsx";

import { HandleClick } from "@utils/manageSelectedApps/manageSelectedApps.js";

import style from "./WorkApp.module.css";

export default function WorkApp({logotype, name}){

    const[isSelected, setIsSelected] = useState(false);

    const { userConfig,setUserConfig } = useContext(Context);
    
    return(
        <div 
        className={style.application}
        onClick={(event)=>{
            HandleClick(event,isSelected,setIsSelected,userConfig,setUserConfig,name)}}
        >
            <img 
            src={logotype} 
            alt={name}
            style={{ border: isSelected ? "2px solid var(--PositiveGreen)" : "2px solid var(--White)" }}
            />
            <span>{name}</span>
        </div>
    )
}
