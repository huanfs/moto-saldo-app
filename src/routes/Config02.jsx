import React,{ useContext, useRef } from "react";

import { Link } from "react-router-dom";  //* react router link component

import { Context } from "@context/context.jsx";  //* import context

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";  //* componente

import style from "@styles/Config02.module.css";  //* stylesheet

export default function Config02(){

    const { setUserConfig } = useContext(Context)  //* using context

    const money = useRef(null);
    const hours = useRef(null);

    function AddGoals(){
        const NewMoney = money.current.value;
        const NewHour = hours.current.value;
        setUserConfig((prevValue => ({
            ...prevValue, goals: {                              //* this function add goals of money and hours 
                ...prevValue.goals, money: NewMoney, time: NewHour,
            }
        })))
    }

    return(
        <main className={style.container}>
            <section>
                <h2>quanto você pretende fazer por mês</h2>
                <input type="text" placeholder="00,00" ref={money}/>
            </section>
            <section>
                <h2>quantas horas pretende trabalhar</h2>
                <input type="text" placeholder="00:00" ref={hours}/>
            </section>
            <section>
                <Link to="/config01"><ArrowButton direction="left"/></Link>
                <Link to="/config03" onClick={AddGoals}><ArrowButton/></Link>
            </section>
        </main>
    )
}

/*
    this component receive the 'setUserConfig' from context.
    the 'AddGoals' function the 'NewMoney' and 'NewHour' as a goals,
    into the 'userConfig' state on context.
*/