import React, { useContext, useState, useEffect, useRef } from "react";

import { Context } from "@context/Context.jsx";

import style from "./TotalValue.module.css";

function TotalValue(){
    const { userData } = useContext(Context);

    const money = useRef(null);

    const[total, setTotal] = useState(0);

    /*
    SOMA OS VALORES DE 'TOTAL' DO ESTADO 'userData'
    EXECUTANDO UM 'forEach' PARA CADA OBJETO DENTRO
    de 'apps' E SALVA O RESULTADO NO ESTADO 'total'.
    */
    useEffect(()=>{
        const Calculate = async() =>{
            let totalValue = 0;
            if(typeof(userData) == "object"){
                userData.apps.forEach(item=>{
                    parseFloat(totalValue += item.total || 0)
                });
                const formattedValue = totalValue.toLocaleString('pt-BR', {
                    minimunFractionDigits: 2,
                    maximunFractionDigits: 2,
                })
                setTotal(formattedValue);
            }
        }
        Calculate()
    },[userData])

    /*
    ANIMAÇÃO AO ADICIONAR VALOR
    */
    useEffect(() => {
        if (money.current) {
            money.current.style.color = "var(--PositiveGreen)";
            money.current.style.transform = "scale(1.5,1.5)";
            const interval = setInterval(() => {
                if (money.current) {
                    money.current.style.color = "var(--White)";
                    money.current.style.transform = "scale(1,1)";
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [total]);

    return(
        <h1 
        className={style.total}>
            <span>
                R$
            </span> 
            <p ref={money}>
                {total}
            </p>
        </h1>
    )
}

export default TotalValue;