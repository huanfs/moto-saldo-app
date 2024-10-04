import React from "react";

/*components*/
    import Header from "@components/header/Header.jsx";
    import MyWorkApp from "@components/myWorkApp/MyWorkApp.jsx";
/*components*/

import style from "@styles/Main.module.css";

export default function Main(){
    return(
        <main className={style.container}>
            <Header/>
            <MyWorkApp/>
        </main>
    )
}