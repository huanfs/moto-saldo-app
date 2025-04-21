import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "@context/Context.jsx";

import { SetOptions } from "@services/setOptions/setOptions.js";

/*components*/
import ArrowButton from "@components/arrowButton/ArrowButton.jsx";
import CheckBox from "@components/checkBox/CheckBox.jsx"; 
/*components*/ 

import style from "@styles/Config03.module.css";

export default function Config03(){

    const { userConfig } = useContext(Context);

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
                <Link to="/main" onClick={() => SetOptions(userConfig)}><ArrowButton/></Link>
            </section>
        </main>
    )
}
