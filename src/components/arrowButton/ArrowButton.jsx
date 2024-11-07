import react from "react";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import style from "./ArrowButton.module.css";

/*
    recebe o parâmetro direction que define se a seta aponta
    para a direita ou não.
*/
function ArrowButton({direction}){
    return(
        <button 
        type="button" 
        className={style.arrow}>
            {
                direction == "left" ? <FaArrowLeft/> : <FaArrowRight/>
            }
        </button>
    )
}

export default ArrowButton;
