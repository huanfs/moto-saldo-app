import React from "react";

import { Link } from "react-router-dom";

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";

import style from "@styles/Register.module.css";

export default function Register(){
    return(
        <main className={style.container}>
            <h1>registrar</h1>
            <form>
                <input type="text" placeholder="crie um nome de usuário"/>
                <input type="password" placeholder="crie uma senha"/>
            </form>
            <section>
                <input type="button" value="registrar"/>
                <Link to="/"><ArrowButton direction="left"/></Link>
            </section>
        </main>
    )
}