import React,{ useContext, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx";

import { CgMathPlus } from "react-icons/cg";

import AddValues from "@components/myWorkApp/addValues/AddValues.jsx";

import style from "./MyWorkApp.module.css";

function MyWorkApp({appLogo}){

    const { logo, userData } = useContext(Context);

    const[addNewValue, setAddNewValue] = useState(false);

    const[total, setTotal] = useState(0);

    let imagem; // essa variável vai armazenar o caminho relativo para a imagem do aplicativo
    let appName; // essa varável vai armazenar o nome do aplicativo

    for( let item of logo){
        item.name == appLogo && ((imagem = item.logotype),(appName = item.name));
    }
    // aqui eu verifico dentro do estado userData.apps os aplicativos que correspondam
    //ao valor de appName (que armazena do objeto 'logo' um nome de app)
    // então defino o valot de total contido no estado userData dentro do estado total
    useEffect(() => { 
        const appData = userData.apps.find(value => value.appName === appName); 
        if (appData) { 
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

