import React, { useContext, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx";

import style from "./TotalValue.module.css";

function TotalValue(){
    const { userData } = useContext(Context);

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

    return(
        <h1 className={style.total}><span>R$</span> {total}</h1>
    )
}

export default TotalValue;