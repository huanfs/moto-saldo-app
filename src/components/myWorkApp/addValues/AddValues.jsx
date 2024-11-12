import React,{ useContext, useRef, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx";

import { UpdateStatistics } from "@utils/update/handleDataUpdating.js";

import { UpdateData } from "@api/updateData/updateData.js";

import { IoMdClose } from "react-icons/io"; 

import style from "./AddValues.module.css";

function AddValues({ close, appImage, alt }){

    const { userData, setUserData } = useContext(Context);

    const[btnIsDisabled, setBtnIsDisabled] = useState(true);

/*
    ESTADO QUE ARMAZENA OS VALORES INSERIDOS NOS INPUTS DESTE COMPONENTE
    E O CAMINHO RELATIVO A UMA IMAGEM DE APLICATIVO RECEBIDA COMO PROPS
    (a imagem será usada para definir em qual aplicativo os valores dos
    inputs será atribuído)
*/
    const[addNewValues , setAddNewValues] = useState({ 
        "app":alt,
        "money":0,
        "distance":0,
        "time":0
    })

    const appIcon = useRef(null);
    const money = useRef(null);
    const distance = useRef(null);
    const time = useRef(null);

/*
    ALTERNA O VALOR DO ESTADO 'btnIsDisabled' DEPENDENDO SE OS CAMPOS
    POSSUEM VALORES VÁLIDOS INSERIDOS OU NÃO.
*/
useEffect(() => {
    const checkFields = () => {
        const hasContent = 
            money.current?.value.trim() !== "" &&
            distance.current?.value.trim() !== "" &&
            time.current?.value.trim() !== "";
        setBtnIsDisabled(!hasContent);
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

async function HandleUpdate(){
    const getValues = await UpdateStatistics(
        appIcon,
        money,
        distance,
        time,
        setUserData,
        addNewValues,
        btnIsDisabled,
        setBtnIsDisabled,
        close,
    )
    const response = await getValues;
    response ? UpdateData(userData) : window.alert("erro ao adicionar"); //ADIDIONAR UMA MENSAGEM AO CLIENT
}

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
            onChange={((event)=>{ // função que formata o valor inserido e adiciona ao estado
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
            onChange={(event)=>{ // função que formata o valor inserido e adiciona ao estado
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
            onChange={(event)=>{ // função que formata o valor inserido e adiciona ao estado
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
            onClick={HandleUpdate} 
            disabled={btnIsDisabled}
            style={{ opacity: btnIsDisabled ? 0.8 : 1 }}/>
        </article>
    )
}

export default AddValues;