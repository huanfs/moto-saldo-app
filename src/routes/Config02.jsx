import React,{ useContext, useRef } from "react";

import { Link } from "react-router-dom";

import { Context } from "@context/Context.jsx";

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";

import style from "@styles/Config02.module.css";

export default function Config02(){

    const { setUserConfig } = useContext(Context);

    const money = useRef(null);
    const time = useRef(null);

    function AddGoals(){
        const moneyGoal = money.current.value.replace(",",".");
        const timeGoal = time.current.value.replace(":",".");
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
                ref={money}
                maxLength="9"
                onChange={(event)=>{ // converte o valor digitado para formato de dinheiro
                let money  = event.target.value.replace(/\D/g, '');
                money = new Intl.NumberFormat('pt-br', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2, 
                }).format(money / 100);
                event.target.value = money;
                }}/>

            </section>
            <section>
                <h2>quantas horas pretende trabalhar</h2>
                <input 
                    type="text" 
                    placeholder="00:00" 
                    ref={time}
                    maxLength="5"
                    onChange={(event) => {
                        let value = event.target.value.replace(/\D/g, '');

                        if (value.length <= 2) {
                        value = value;
                        } else {
                        value = value.slice(0, value.length - 2) + ':' + value.slice(-2);
                        }

                        event.target.value = value;
                    }}
                    />

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
