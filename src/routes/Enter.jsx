import React, { useRef, useContext } from "react";

import { Context } from "@context/Context.jsx";

import { useNavigate } from "react-router-dom";

import {Authenticate} from "@api/enter/authenticate.js";

import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import style from "@styles/Enter.module.css";

export default function Enter(){

    const { setUserData, setUserConfig } = useContext(Context);

    const navigateTo = useNavigate();

    const userName = useRef(null);
    const password = useRef(null);

    /*
    REALIZA A AUTENTICAÇÃO DO USUÁRIO
    */
    async function LogIn(){
        const authenticate = Authenticate(
            userName.current, 
            password.current,
            setUserConfig,
            setUserData,
            navigateTo,
        );
    }
    
    return(
        <main className={style.container}>
            <h1>entrar</h1>
            <form>
                <div>
                    <label htmlFor="user">usuário</label>
                    <div>
                        <FaUser/>
                        <input type="text" ref={userName}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="password">senha</label>
                    <div>
                        <FaLock/>
                        <input type="text" ref={password}/>
                    </div>
                </div>
            </form>
            <section>
                <button type="button" onClick={LogIn}>entrar<FaArrowRight/></button>
                <p onClick={()=>{navigateTo("/")}}>esqueci a minha senha</p>
            </section>
        </main>
    )
}


