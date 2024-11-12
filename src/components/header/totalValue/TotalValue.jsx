import React, { useContext, useState, useEffect, useRef } from "react";

import { Context } from "@context/Context.jsx";

import style from "./TotalValue.module.css";

function TotalValue(){
    const { userData } = useContext(Context);

    const money = useRef(null);

    const[total, setTotal] = useState(0);

    /*
    SOMA OS VALORES DE 'TOTAL' DO ESTADO 'userData'
    exEXECUTANDO UM 'forEach' PARA CADA OBJETO DENTRO
    de 'apps' E SALVA O RESULTADO NO ESTADO 'total'.
    */
    useEffect(()=>{
        const Calculate = async() =>{
            let totalValue = 0;
            if(typeof(userData) == "object"){
                userData.apps.forEach(item=>{
                    parseFloat(totalValue += item.total || 0)
                });
                setTotal(totalValue);
            }
        }
        Calculate()
    },[userData])

    /*
    ANIMAÇÃO AO ADICIONAR VALOR
    */
    useEffect(()=>{
        money.current.style.color="var(--PositiveGreen)";
        money.current.style.transform="scale(1.5,1.5)";
        setInterval((i)=>{
            money.current.style.color="var(--White)";
            money.current.style.transform="scale(1,1)";
        },1000);
    },[total])

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