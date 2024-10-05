import React,{ useContext } from "react";

import { Context } from "@context/Context.jsx";  //* import context

import { CgMathPlus } from "react-icons/cg";  //* react-icon

import style from "./MyWorkApp.module.css";  //* stylesheet

function MyWorkApp({appLogo}){

    const { logo } = useContext(Context); //* using context

    let imagem = null 

    for( let item of logo){
        item.name==appLogo?imagem=item.logotype:null;
    }

    return(
       <article className={style.container}>
        <img src={imagem?imagem:null}/>
        <span>99,99</span>
        <button type="button">
            <CgMathPlus/>
        </button>
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