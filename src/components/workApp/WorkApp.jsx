import React,{ useContext } from "react";

import { Context } from "@context/context.jsx";

import style from "./WorkApp.module.css";

export default function WorkApp({logotype, name}){

    const { userConfig,setUserConfig } = useContext(Context);
    /*
    CRIA NO ESTADO 'userConfig.apps' UM OBJETO
     
    */
   React.useEffect(()=>{
    console.log(userConfig.apps)
   },[userConfig])
    function AddApp(){
        // const NewApp = name;
        setUserConfig((prevValue)=>({
            ...prevValue, apps:[...prevValue.apps, {"appName":name, "total":0, "distance":0, "time":0}]
        }))
    }

    return(
        <div className={style.application} onClick={AddApp}>
            <img src={logotype} alt={name}/>
            <span>{name}</span>
        </div>
    )
}
