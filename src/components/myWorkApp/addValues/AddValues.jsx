import React,{ useContext, useRef, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx"; //* import context

import { IoMdClose } from "react-icons/io"; // react icon

import style from "./AddValues.module.css"; //* stylesheet

function AddValues({ close, appImage, alt }){

    const { setUserData } = useContext(Context); // using context

    const[isDisabled, setIsDisabled] = useState(true); //controls the action button

    const[value, setValue] = useState(0) //states for value in BRL format

/*references to input*/
    const appIcon = useRef(null);
    const money = useRef(null);
    const distance = useRef(null);
    const time = useRef(null);
/*references to input*/

async function AddStatistics() {
    if (
        money.current?.value.trim() !== "" &&
        distance.current?.value.trim() !== "" &&
        time.current?.value.trim() !== ""
    ) {
        setUserData((prevValue) => ({
            ...prevValue,
            apps: prevValue.apps.map((item) => {
                if (item.appName === appIcon.current.alt) {
                    return {
                        ...item,
                        total: item.total + Number(money.current.value) / 100,
                        distance: item.distance + Number(distance.current.value),
                        time: item.time + Number(time.current.value),
                    };
                }
                return item;
            })
        }));
        close(false); // Fecha o componente
        setIsDisabled(!isDisabled); //trurns off the action button
    }
}

useEffect(() => {
    const checkFields = () => {
        const hasContent = 
            money.current?.value.trim() !== "" &&
            distance.current?.value.trim() !== "" &&
            time.current?.value.trim() !== "";
        setIsDisabled(!hasContent);
    };

    // Adiciona eventos para verificar os campos quando há alterações
    money.current?.addEventListener("input", checkFields);
    distance.current?.addEventListener("input", checkFields);
    time.current?.addEventListener("input", checkFields);

    // Remove eventos ao desmontar o componente
    return () => {
        money.current?.removeEventListener("input", checkFields);
        distance.current?.removeEventListener("input", checkFields);
        time.current?.removeEventListener("input", checkFields);
    };
}, []);

    return(
        <article className={style.new}> 
            <button 
            type="button"
            className={style.close}
            onClick={()=>{close(false)}}>
                <IoMdClose/>
            </button>

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
            value="adicionar" 
            onClick={AddStatistics} 
            disabled={isDisabled}
            style={{ opacity: isDisabled ? 0.8 : 1 }}/>
        </article>
    )
}

export default AddValues;


/*
    this component is responsible for save new money, distance and hours values in each
    application option.
*/