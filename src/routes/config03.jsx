import React, { useContext } from "react";

import { Link } from "react-router-dom" //* link from react-router-dom

import { Context } from "@context/Context.jsx"; //* import context

/*components*/
import ArrowButton from "@components/arrowButton/ArrowButton.jsx";
import CheckBox from "@components/checkBox/CheckBox.jsx"; 
/*components*/ 

import style from "@styles/Config03.module.css";  //* stylesheet

export default function Config03(){

    const { userOptions } = useContext(Context); //* using context

    async function SaveData(){
        const savingData = await fetch("http://localhost:8182/createOptions",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(userOptions),
            mode:"cors",
        })
        .catch((err)=>{console.log(err)})
    }

    return(
        <main className={style.container}>
            <h1>pretende trabalhar aos finais de semana</h1>
            <article>
                <CheckBox 
                label="sim, pretendo trabalhar sábado e domingo"
                box="01"/>
                <CheckBox 
                label="não, pretendo trabalhar somente sábado"
                box="02"/>
                <CheckBox 
                label="não, pretendo trabalhar somente domingo"
                box="03"/>
                <CheckBox 
                label="não pretendo trabalhar aos finais de semana"
                box="04"/>
            </article>
            <section>
                <Link to="/config02"><ArrowButton direction="left"/></Link>
                <Link to="/main" onClick={SaveData}><ArrowButton/></Link>
            </section>
        </main>
    )
}


//esta rota é a responsável por concluir e salvar todas as configurações
// a função SaveData() faz uma requisição do tipo POST e passa como corpo 
// da requisição o estado userOptions convertido em uma string JSON