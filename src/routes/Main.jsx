import React,{ useContext, useEffect, useState  } from "react";

/*components*/
    import Header from "@components/header/Header.jsx";
    import MyWorkApp from "@components/myWorkApp/MyWorkApp.jsx";
/*components*/

import { Context } from "@context/Context.jsx";

import style from "@styles/Main.module.css";

export default function Main(){

    const { userOptions, logo } = useContext(Context);

    return(
        <main className={style.container}>
            <Header/>
            {
                userOptions.apps.map((item, index)=>{
                    return(
                        <MyWorkApp 
                        key={index}
                        appLogo={item}/>
                    )
                })
            }
        </main>
    )
}