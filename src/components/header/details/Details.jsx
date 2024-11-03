import React, { useContext, useState, useEffect } from "react";

import { Context } from "@context/context.jsx"; // importação do contexto

import style from "./Details.module.css";

function Details(){

    const { userData } = useContext( Context ) // utilização do contexto

    const[details, setDetails] = useState({
        "total":0,
        "distance":0,
        "time":0
    })

    useEffect(() => {
        if (userData && typeof userData === "object") {
            let total = 0;  //variáveis que vão armazenar cada valor individualmente
            let distance = 0;
            let time = 0;

            userData.apps.forEach((item) => { // o loop mapeia cada propriedade correspondente e insere o valor 
                total += item.total;          // dentro da variável.
                distance += item.distance;
                time += item.time;
            });
            // Atualiza o estado com os valores acumulados de cada variável
            setDetails({ total, distance, time });
        }
    }, [userData]);

    return(
        <article className={style.details}>
            <div>
                <p>ganhos totais</p>
                <span>
                    {
                        details.total != 0 ? details.total : "00,00"
                    }
                    </span>
            </div>
            <div>
                <p>KM/s percorridos</p>
                <span>
                    {
                        details.distance != 0 ? details.distance : "00.0"
                    }

                </span>
            </div>
            <div>
                <p>horas trabalhadas</p>
                <span>
                    {
                        details.time != 0 ? details.time : "00:00"
                    }
                    </span>
            </div>
        </article>
    )
}

export default Details;