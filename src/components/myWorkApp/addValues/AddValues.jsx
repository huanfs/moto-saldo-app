import React,{ useContext, useRef, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx"; //* import context

import { IoMdClose } from "react-icons/io"; // react icon

import style from "./AddValues.module.css"; //* stylesheet

function AddValues({ close, appImage, alt }){

    const { setUserData } = useContext(Context); // using context

    const[isDisabled, setIsDisabled] = useState(true); //controls the action button

    const[addNewValues , setAddNewValues] = useState({
        "app":alt,
        "money":0,
        "distance":0,
        "time":0
    })

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
                        total: Number(item.total) + (addNewValues.money),
                        distance: parseFloat(item.distance) + (addNewValues.distance),
                        time: item.time + addNewValues.time,
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

useEffect(()=>{
    console.log(addNewValues)
})

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
            maxLength="8"
            onChange={((event)=>{
                //setValue(Intl.NumberFormat('pt-br').format(event.target.value.replace(/\D/g,'') / 100))
                let money = event.target.value.replace(/\D/g, '');
                if(money.length > 2){
                    money = money.slice(0, 2) + "," + money.slice(2, 4);
                }
                event.target.value = money;

                setAddNewValues((prevValue)=>({
                    ...prevValue,
                    money:parseFloat(money.replace(",","."))
                }))
            })}/>

            <input 
            ref={distance} 
            type="text" 
            maxLength="4"
            placeholder="KM/percorridos"
            onChange={(event)=>{
                let distance = event.target.value.replace(/\D/g,'');
                if(distance.length > 2){
                    distance = distance.slice(0, 2) + "." + distance.slice(2, 3)
                }
                event.target.value = distance;
                setAddNewValues((prevValue)=>({
                    ...prevValue,
                    distance:parseFloat(distance)
                }))
            }}/>

            <input ref={time} 
            type="text" 
            maxLength="5"
            placeholder="horas/minutos gastos"
            onChange={(event)=>{
                let time = event.target.value.replace(/\D/g,'');
                if(time.length > 2){
                    time = time.slice(0, 2) + ":" + time.slice(2, 4)
                }
                event.target.value = time

                setAddNewValues((prevValue)=>({
                    ...prevValue,
                    time:parseFloat(time.replace(":","."))
                }))
            }}/>

            <span>
                {
                    money.current && money.current.value ? money.current.value : "00,00"
                }
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