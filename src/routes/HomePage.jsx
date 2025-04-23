import React from "react";

import { useNavigate } from "react-router-dom";

import { FaMotorcycle } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import style from "@styles/HomePage.module.css";

export default function HomePage(){

    const navigateTo = useNavigate();
    
    return(
        <main className={style.container}> 
            <header>
                <h1>moto saldo app</h1>
                <h2>seus lucros na ponta do lápis!</h2>
            </header>
            <FaMotorcycle className={style.motorcycle}/>
            <section>
                <button type="button" onClick={() => navigateTo("/enter")}>Já tenho conta<FaArrowRight/></button>
                <input type="button" value="criar minha conta" onClick={() => navigateTo("/register")}/>
            </section>

        </main>
    )
}
