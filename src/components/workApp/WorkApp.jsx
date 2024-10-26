import React,{ useContext } from "react";

import { Context } from "@context/context.jsx";  //* import context

import style from "./WorkApp.module.css"; // stylesheet

export default function WorkApp({logotype, name}){

    const { setUserConfig } = useContext(Context);  //* using context

    function AddApp(event){
        const NewApp = event.target.parentElement.id;
        setUserConfig((prevValue)=>({
            ...prevValue, apps:[...prevValue.apps, {"appName":NewApp, "total":0, "distance":0, "time":0}]
        }))
    }

    return(
        <div className={style.application} id={name} onClick={AddApp}>
            <img src={logotype} alt={name}/>
            <span>{name}</span>
        </div>
    )
}

/*  
    this component import the atualization function 'setUserConfig'
    from context.
    this component receive 'LOGOTYPE' and 'NAME' from props.
    the function AddApp catches the id of div element, (ID = 'NAME') and storages into
    'setUserConfig'.
    finally, render and DIV element and an IMG and SPAN element
    as child.
*/