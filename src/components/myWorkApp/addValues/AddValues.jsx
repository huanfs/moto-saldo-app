import React,{ useContext, useRef, useState } from "react";

import { Context } from "@context/Context.jsx"; //* import context

import style from "./AddValues.module.css"; //* stylesheet

function AddValues({ close, appImage, alt }){

    const { userData, setUserData } = useContext(Context); // using context

    const[value, setValue] = useState(0) //states for value in BRL format

/*references to input*/
    const appIcon = useRef(null);
    const money = useRef(null);
    const distance = useRef(null);
    const time = useRef(null);
/*references to input*/

    async function AddStatistics(){
        setUserData((prevValue)=>({
            ...prevValue,
            apps: prevValue.apps.map((item)=>{
                if(item.appName == appIcon.current.alt){
                    return{
                        ...item,
                        total: item.total + Number(money.current.value / 100),
                        distance: item.distance + Number(distance.current.value),
                        time: item.time + Number(time.current.value),
                    }
                }
                return item;
            })
        }))
        close(false) //* closes the component
    }

    return(
        <article className={style.new}>
            <img ref={appIcon} src={appImage} alt={alt}/>

            <input 
            ref={money}
            type="text" 
            placeholder="ganhos" 
            onChange={((event)=>{
                setValue(Intl.NumberFormat('pt-br').format(event.target.value.replace(/\D/g,'') / 100))
            })}/>

            <input 
            ref={distance} 
            type="text" 
            placeholder="KM/percorridos"/>

            <input ref={time} 
            type="text" 
            placeholder="horas/minutos gastos"/>

            <span>
                {value ? value : "00,00"}
            </span>

            <input 
            type="button" 
            value="adicionar" onClick={AddStatistics}/>
        </article>
    )
}

export default AddValues;


/*
    this component is responsible for save new money, distance and hours values in each
    application option.
*/