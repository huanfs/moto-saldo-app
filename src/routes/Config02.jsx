import React,{ useContext, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";  //* react router link component

import { Context } from "@context/context.jsx";  //* import context

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";  //* componente

import style from "@styles/Config02.module.css";  //* stylesheet

export default function Config02(){

    const { setUserOptions } = useContext(Context)  //* using context

    const navigateTo = useNavigate();  //* navigate hook

    const money = useRef(null);
    const hours = useRef(null);

    function AddGoals(){
        const NewMoney = money.current.value;
        const NewHour = hours.current.value;
        setUserOptions((prevValue => ({
            ...prevValue, goals: {                              //* this function add goals of money and hours 
                ...prevValue.goals, money: NewMoney, time: NewHour,
            }
        })))
        navigateTo("") ////////////////////////*****************AQUI*/
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