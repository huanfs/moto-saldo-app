import React,{ useContext } from "react";

import { Context } from "@context/Context.jsx";

import style from "./CheckBox.module.css";

function CheckBox({ label, box }){

    const { setUserConfig } = useContext(Context);
    
   /*
   CAPTURA O 'id' DO ELEMENTO E SALVA NO ESTADO
   DO CONTEXTO
   */
    function SetChoice(event){
        setUserConfig((prevValue)=> ({
            ...prevValue, choice: event.target.id
        }))
    }

    return(
        <div 
        className={style.box}
        onClick={SetChoice}>
            <input 
            type="checkbox" 
            id={box}/>
            <label htmlFor={box}> { label } </label>
        </div>
    )
}

export default CheckBox;
