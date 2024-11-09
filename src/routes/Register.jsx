import React,{ useRef } from "react"; 

import { Link, useNavigate } from "react-router-dom";

import {HandleUserRegistration} from "@utils/register/handleUserRegistration.js";

import {CreateUser} from "@api/register/register.js";

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";

import style from "@styles/Register.module.css";

export default function Register(){

    const navigateTo = useNavigate();

    const user = useRef(null);
    const password = useRef(null);

    /*
    FUNÇÃO DE REGISTRO DE NOVO USUÁRIO
    */
    async function Register(){
        const isValid = HandleUserRegistration(user.current, password.current);
        const response = await isValid;
        console.log(response);
        if(response.name && response.password == true){
            const register = CreateUser(user.current.value, password.current.value, navigateTo);
        }
    }

    return(
        <main className={style.container}>
            <h1>registrar</h1>
            <form>
                <input type="text" placeholder="crie um nome de usuário" ref={user}/>
                <input type="password" placeholder="crie uma senha" ref={password}/>
            </form>
            <section>
                <input type="button" value="registrar" onClick={Register}/>
                <Link to="/"><ArrowButton direction="left"/></Link>
            </section>
        </main>
    )
}
