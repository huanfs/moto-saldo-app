import React from "react";

import { Link } from "react-router-dom";

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";

import style from "@styles/Config02.module.css";

export default function Config02(){
    return(
        <main className={style.container}>
            <section>
                <h2>quanto você pretende fazer por mês</h2>
                <input type="text" placeholder="00"/>
            </section>
            <section>
                <h2>quantas horas pretende trabalhar</h2>
                <input type="text" placeholder="00"/>
            </section>
            <section>
                <Link to="/config01"><ArrowButton direction="left"/></Link>
                <Link to=""><ArrowButton/></Link>
            </section>
        </main>
    )
}