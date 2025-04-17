import React, { useRef, useContext, useEffect } from "react";

import { Context } from "@context/Context.jsx";

import { useNavigate } from "react-router-dom";

import {Authenticate} from "@api/enter/authenticate.js";

import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import AlertMessage from "@components/alertMessage/AlertMessage.jsx";

import style from "@styles/Enter.module.css";

export default function Enter(){

    const{ 
        setUserData, 
        setUserConfig, 
        statusMessage, 
        setStatusMessage, 
        showStatusMessage, 
        setShowStatusMessage 
    } = useContext(Context);

    const navigateTo = useNavigate();

    const userName = useRef(null);
    const password = useRef(null);

    /*
    REALIZA A AUTENTICAÇÃO DO USUÁRIO
    */
    async function LogIn(){
        try{
            const authenticate = Authenticate(
                userName.current, 
                password.current,
                setUserConfig,
                setUserData,
                navigateTo,
            );
            if(authenticate.status != 200){
                setStatusMessage("Usuário não encontrado")
                setShowStatusMessage(true);
            }
        }
        catch(err){
            setStatusMessage("Erro ao autenticar o usuário");
            setShowStatusMessage(true);
        }
    }

    /*ESCONDE A MENSAGEM DE ERRO*/
    useEffect(()=>{
        if(showStatusMessage){
            setTimeout(() => {
                setShowStatusMessage(false);
            }, 5000);
        }
    },[showStatusMessage]);

    /*useEffect(() => {
        if (sessionStorage.getItem("userData")) {
            const autoCompleteCredentials = window.confirm("Deseja usar as credenciais salvas?");
            if(autoCompleteCredentials){
                const credentials = JSON.parse(sessionStorage.getItem("userData"));
                console.log(credentials)
                userName.current.value = credentials.userName;
                password.current.value = credentials.userPassword;
                LogIn();
            }
        }
    },[]);*/
    
    return(
        <main className={style.container}>
            {
                showStatusMessage && <AlertMessage msg={statusMessage} action={setShowStatusMessage}/>
            }
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
                        <input type="password" ref={password}/>
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


