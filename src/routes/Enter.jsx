import React from "react";

import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import style from "@styles/Enter.module.css";

export default function Enter(){
    return(
        <main className={style.container}>
            <h1>entrar</h1>
            <form>
                <div>
                    <label htmlFor="user">usuário</label>
                    <div>
                        <FaUser/>
                        <input type="text"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="password">senha</label>
                    <div>
                        <FaLock/>
                        <input type="text"/>
                    </div>
                </div>
            </form>
            <section>
                <Link to=""><button type="button">entrar<FaArrowRight/></button></Link>
                <Link to="/">esqueci a minha senha</Link>
            </section>
        </main>
    )
}