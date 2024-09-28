import React from "react";

import { Link } from "react-router-dom";

import { FaMotorcycle } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import style from "@styles/HomePage.module.css";

export default function HomePage(){
    return(
        <main className={style.container}> 
            <header>
                <h1>moto saldo app</h1>
                <h2>seus lucros na ponta do lápis!</h2>
            </header>
            <FaMotorcycle className={style.motorcycle}/>
            <section>
                <Link to="/enter">
                    <button type="button">Já tenho conta<FaArrowRight/></button>
                </Link>
                <Link to="/register">
                    <input type="button" value="criar minha conta"/>
                </Link>
            </section>

        </main>
    )
}