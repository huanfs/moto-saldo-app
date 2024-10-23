import React,{ useRef, useState } from "react";

import style from "./AddValues.module.css";

function AddValues({ close, appImage }){

    const[value, setValue] = useState(0)

    return(
        <article className={style.new}>
            <img src={appImage}/>

            <input 
            type="text" 
            placeholder="ganhos" 
            onChange={((event)=>{
                setValue(Intl.NumberFormat('pt-br').format(event.target.value.replace(/\D/g,'') / 100))
            })}/>
            <input type="text" placeholder="KM/percorridos"/>
            <input type="text" placeholder="horas/minutos gastos"/>

            <span>{value ? value : "00,00"}</span>
            <input 
            type="button" 
            value="adicionar"
            onClick={()=>{close(false)}}/>
        </article>
    )
}

export default AddValues;