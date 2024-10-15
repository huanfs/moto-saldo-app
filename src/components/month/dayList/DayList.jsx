import React, { useState, useEffect } from "react";

/*components*/
    import DayBtn from "@components/month/dayList/dayBtn/DayBtn.jsx";
/*components*/

import style from "./DayList.module.css"; //* stylesheet

function DayList(){

    const[days, setDays] = useState([]); //* storages an ar ray of days in a month (numeric)

    useEffect(()=>{ 
        const day = [];
        const data = new Date();
        const lastDay = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
        for(let i = 1; i <= lastDay; i ++){
            day.push(i);
        }
        setDays(day);
    },[])

    return(
        <article className={style.dayList}>
            {
                days && (
                    days.map((item, index)=>{
                        return(
                            <DayBtn dayNumber={item} key={index}/>
                        )
                    })
                )
            }
        </article>
    )
}

export default DayList;

// este componente é responsável por armazenar cada dia do mês ( de forma numerica)
//a funcão useEffect faz isto, primeiro, declarei um estado de array vazio que vai armazenar
//os nomes de cada dia um a um, agora o useEffect cria um novo array, depois nicializa o objeto new Date()
// depois, captura o ultimo dia do mês
//agora o loop for utiliza o valor de ultimo dia do mês pra definir o limite de iterações por dia
//por ultimo adiciona cada dia dentro do estado de array