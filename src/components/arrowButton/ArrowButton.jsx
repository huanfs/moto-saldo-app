import react from "react";

/*icon-arrow*/
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
/*icon-arrow*/

import style from "./ArrowButton.module.css";

function ArrowButton({direction}){
    return(
        <button type="button" className={style.arrow}>
            {
                direction == "left" ? <FaArrowLeft/> : <FaArrowRight/>
            }
        </button>
    )
}

export default ArrowButton;