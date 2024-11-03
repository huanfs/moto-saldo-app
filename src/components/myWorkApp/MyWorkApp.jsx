import React,{ useContext, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx";  // importação do contexto

import { CgMathPlus } from "react-icons/cg";  // react-icon

import AddValues from "@components/myWorkApp/addValues/AddValues.jsx"; // componente

import style from "./MyWorkApp.module.css";  // estilização

function MyWorkApp({appLogo}){

    const { logo, userData } = useContext(Context); // utilização do contexto

    const[addNewValue, setAddNewValue] = useState(false); // estado que controla a abertura do componente AddValues.jsx

    const[total, setTotal] = useState(0); // estado que armazena o valor total de cada aplicativo

    let imagem; // essa variável vai armazenar o caminho relativo para a imagem do aplicativo
    let appName; // essa varável vai armazenar o nome do aplicativo

    for( let item of logo){
        item.name == appLogo && ((imagem = item.logotype),(appName = item.name));
    }

    useEffect(() => { // aqui eu verifico dentro do estado userData.apps os aplicativos que correspondam
        const appData = userData.apps.find(value => value.appName === appName); //ao valor de appName (que armazena do objeto 'logo' um nome de app)
        if (appData) { // então defino o valot de total contido no estado userData dentro do estado total
            setTotal(appData.total);
        }
    }, [userData, appName]);

    return(
       <article className={style.container}>
        <img src={imagem ? imagem : null}/>
        <span>
            {
                total
            }
        </span>
        <button type="button" onClick={()=>{setAddNewValue(true)}}>
            <CgMathPlus/>
        </button>
        {
            addNewValue && <AddValues close={setAddNewValue} appImage={imagem} alt={appName}/>
        }
       </article>
    )
}

export default MyWorkApp;

/*
este componente recebe como 'props' um nome de aplicativo, então eu importo do contexto
LOGO que é um array de objetos com pares de chave valor para um caminho relativo de imagem
e o nome correspondente, eu uso um loop for para percorrer o array de objetos LOGO para encontrar 
o caminho de imagem correspondente ao nome recebido na 'props' e então o armazeno em uma variável que 
é passada para o atributo src da imagem
*/
