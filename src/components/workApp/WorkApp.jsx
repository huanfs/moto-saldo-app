import React,{ useContext, useEffect } from "react";

import { Context } from "@context/context.jsx";  //* import context

import style from "./WorkApp.module.css";

export default function WorkApp({logotype, name}){

    const { userConfig, setUserConfig } = useContext(Context);  //* using context

    // function AddApp(event){
    //     const NewApp = event.target.parentElement.id;
    //     setUserConfig((prevValue)=>({
    //         ...prevValue, apps:[...prevValue.apps, NewApp]   //* this function adds a new app for work informations
    //     }))
    // }

    function AddApp(event){
        const NewApp = event.target.parentElement.id;
        setUserConfig((prevValue)=>({
            ...prevValue, apps:[...prevValue.apps, {"appName":NewApp, "total":0}]
        }))
    }

    return(
        <div className={style.application} id={name} onClick={AddApp}>
            <img src={logotype} alt={name}/>
            <span>{name}</span>
        </div>
    )
}