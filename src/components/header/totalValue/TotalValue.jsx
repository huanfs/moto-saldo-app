import React, { useContext, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx"; //* import context

import style from "./TotalValue.module.css"; //* stylesheet

function TotalValue(){
    const { userData } = useContext(Context); //* using context

    const[total, setTotal] = useState(0);

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
        console.log(total)
        console.log(userData.apps)
    },[userData])

    return(
        <h1 className={style.total}><span>R$</span> {total}</h1>
    )
}

export default TotalValue;