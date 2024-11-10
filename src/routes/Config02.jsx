import React,{ useContext, useRef } from "react";

import { Link } from "react-router-dom";

import { Context } from "@context/context.jsx";

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";

import style from "@styles/Config02.module.css";

export default function Config02(){

    const { setUserConfig } = useContext(Context);

    const money = useRef(null);
    const time = useRef(null);

    function AddGoals(){
        const moneyGoal = money.current.value;
        const timeGoal = time.current.value;
        setUserConfig((prevValue => ({
            ...prevValue, goals: {                             
                ...prevValue.goals, money: moneyGoal, time: timeGoal,
            }
        })))
    }

    return(
        <main className={style.container}>
            <section>
                <h2>quanto você pretende fazer por mês</h2>
                <input 
                type="text" 
                placeholder="00,00" 
                ref={money}/>
            </section>
            <section>
                <h2>quantas horas pretende trabalhar</h2>
                <input 
                type="text" 
                placeholder="00:00" 
                ref={time}/>
            </section>
            <section>
                <Link to="/config01">
                    <ArrowButton direction="left"/>
                </Link>
                <Link to="/config03" onClick={AddGoals}>
                    <ArrowButton/>
                </Link>
            </section>
        </main>
    )
}
