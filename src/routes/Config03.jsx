import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Context } from "@context/Context.jsx";

import { SetOptions } from "@services/setOptions/setOptions.js";

import { FaArrowRight } from "react-icons/fa";

/*components*/
import ArrowButton from "@components/arrowButton/ArrowButton.jsx";
import CheckBox from "@components/checkBox/CheckBox.jsx";
import Loading from "@components/loading/Loading.jsx"; 
/*components*/ 

import style from "@styles/Config03.module.css";

export default function Config03(){

    const navigateTo = useNavigate();

    const[isLoading, setIsLoading] = useState(false);

    const { userData, setUserData, userConfig } = useContext(Context);

    return(
        <main className={style.container}>
            {
                isLoading && <Loading/>
            }
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
                {/*<Link to="/main" onClick={() => SetOptions(userConfig)}><ArrowButton/></Link>*/}
                <button type="button" className={style.arrow} onClick={() => {SetOptions(userConfig, navigateTo, setIsLoading, userData, setUserData)}}>
                    <FaArrowRight/>
                </button>
            </section>
        </main>
    )
}
