import React,{ useContext, useRef, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx";

import AlertMessage from "@components/alertMessage/AlertMessage.jsx";

import { UpdateStatistics } from "@utils/update/handleDataUpdating.js";

import { UpdateData } from "@services/updateData/updateData.js";

import { FormatHours } from "@utils/format/formatHours.js";
import { FormatKilometers } from "@utils/format/formatKilometers.js";
import { FormatMoney } from "@utils/format/formatMoney.js";

import { IoMdClose } from "react-icons/io"; 

import style from "./AddValues.module.css";

function AddValues({ close, appImage, alt }){

    const[error, setError] = useState(false);

    const [ammount, setAmmount] = useState("");
    const [distanceTraveled, setDistanceTraveled] = useState("");
    const [hours, setHours] = useState("");

    const { userData, setUserData } = useContext(Context);

    const[btnIsDisabled, setBtnIsDisabled] = useState(true);

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

useEffect(() => {
    const checkFields = () => {
        const hasContent = 
            money.current?.value.trim() !== "" &&
            distance.current?.value.trim() !== "" &&
            time.current?.value.trim() !== "";
        setBtnIsDisabled(!hasContent);
    };

    money.current?.addEventListener("input", checkFields);
    distance.current?.addEventListener("input", checkFields);
    time.current?.addEventListener("input", checkFields);

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
    response ? (UpdateData(userData), setError(false)) : setError(true);
}

    return(
        <article className={style.new}> 
        {
            error != "" && <AlertMessage msg="não foi possível adicionar" action={setError}/>
        }
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
            value={ammount}
            onChange={(event)=>{
                const formattedMoney = FormatMoney(event.target.value, setAddNewValues);
                setAmmount(formattedMoney);
            }}
            />

            <input 
            ref={distance} 
            type="text" 
            maxLength="4"
            value={distanceTraveled}
            placeholder="KM/percorridos"
            onChange={(event)=>{
                const formattedKilometers = FormatKilometers(event.target.value, setAddNewValues);
                setDistanceTraveled(formattedKilometers);
            }}
            />

            <input
            ref={time}
            type="text"
            maxLength="2"
            value={hours}
            placeholder="tempo gasto (min)"
            onChange={(event) => {
                const formattedValue = FormatHours(event.target.value, setAddNewValues);
                setHours(formattedValue);
            }}
            />

            <span>
                {
                    ammount && ammount != "" ? ammount : "00,00"
                }
            </span>

            <input 
            type="button" 
            value="adicionar" 
            onClick={HandleUpdate} 
            disabled={btnIsDisabled}
            style={{ opacity: btnIsDisabled ? 0.8 : 1 }}
            />
        </article>
    )
}

export default AddValues;