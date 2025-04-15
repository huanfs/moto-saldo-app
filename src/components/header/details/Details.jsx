import React, { useContext, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx";

import { useNavigate } from "react-router-dom";

import style from "./Details.module.css";

function Details(){

    const navigateTo = useNavigate();

    const { userData } = useContext( Context );

    const[details, setDetails] = useState({ // estado que armazena o total de tempo distancia e ganhos
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
                        details.total != 0 ? `${details.total} R$` : "00,00"
                    }
                    </span>
            </div>
            <div>
                <p>KMs percorridos</p>               
                <span>
                    {
                        details.distance != 0 ? `${details.distance} KM` : "00.0"
                    }
                </span>
            </div>
            <div>
                <p>horas trabalhadas</p>
                <span>
                    {
                        details.time != 0 ? `${details.time} H` : "00:00"
                    }
                    </span>
            </div>
            <input 
            type="button" 
            value="sair do aplicativo"
            onClick={()=>{navigateTo("/")}}
            />
        </article>
    )
}

export default Details;