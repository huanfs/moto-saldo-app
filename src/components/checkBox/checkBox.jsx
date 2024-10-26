import React,{ useContext } from "react";

import { Context } from "@context/Context.jsx";  //* import context

import style from "./CheckBox.module.css";

function CheckBox({ label, box }){

    const { setUserConfig } = useContext(Context);

    function SetChoice(event){
        setUserConfig((prevValue)=> ({
            ...prevValue, choice: event.target.id
        }))
    }

    return(
        <div 
        className={style.box}
        onClick={SetChoice}>
            <input type="checkbox" id={box}/>
            <label htmlFor={box}> { label } </label>
        </div>
    )
}

export default CheckBox;


/*
    this component receives 'LABEL' and 'BOX' props.
    renders an div with input type checkbox and an label for each input. 
    this component is responsible for storages into a 'userConfig' state throught 
    'setUserStaste' from context a decision of work in weekend or not, saving in
    context the id={box} value.
*/