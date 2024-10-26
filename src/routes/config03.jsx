import React, { useContext } from "react";

import { Link } from "react-router-dom" //* link from react-router-dom

import { Context } from "@context/Context.jsx"; //* import context

/*components*/
import ArrowButton from "@components/arrowButton/ArrowButton.jsx";
import CheckBox from "@components/checkBox/CheckBox.jsx"; 
/*components*/ 

import style from "@styles/Config03.module.css";  //* stylesheet

export default function Config03(){

    const { userConfig } = useContext(Context); //* using context

    async function SaveData(){
        const savingData = await fetch("http://localhost:8182/createOptions",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(userConfig),
            mode:"cors",
        })
        .catch((err)=>{console.log("erro ao prosseguir " + err)})
    }

    return(
        <main className={style.container}>
            <h1>pretende trabalhar aos finais de semana</h1>
            <article>
                <CheckBox 
                label="sim, pretendo trabalhar sábado e domingo"
                box="01"/>
                <CheckBox 
                label="não, pretendo trabalhar somente sábado"
                box="02"/>
                <CheckBox 
                label="não, pretendo trabalhar somente domingo"
                box="03"/>
                <CheckBox 
                label="não pretendo trabalhar aos finais de semana"
                box="04"/>
            </article>
            <section>
                <Link to="/config02"><ArrowButton direction="left"/></Link>
                <Link to="/main" onClick={SaveData}><ArrowButton/></Link>
            </section>
        </main>
    )
}

/*
    this route is responsible for finish all user configurations.
    the 'SaveData' function fetches an type 'POST' and give to body the
    state of 'userOptions' state in string format.
*/