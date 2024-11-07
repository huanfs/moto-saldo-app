import React, { useRef, useContext } from "react";

import { Context } from "@context/Context.jsx";

import { useNavigate } from "react-router-dom";

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
        try{
            const user = {
                name: userName.current.value,
                password: password.current.value,
            };
            const searchUser = await fetch("http://localhost:8182/authenticate",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
                mode:"cors",
            })
            if(searchUser.status == 200){
                const data = await searchUser.json()
                setUserConfig((prevValue)=>({
                    ...prevValue, 
                    userName: userName.current.value, 
                    userPassword: password.current.value,
                }))
                if(data.data){ //caso o usuário já seja cadastrado, recebe e salva seus dados no estadoUserData e navega para a página Main.jsx
                    setUserData(JSON.parse(data.data))
                    navigateTo("/main")
                }
                else if(!data.data){ // caso o usuário seja novo, procede para a página config01.jsx para iniciar configurações de conta
                    navigateTo("/config01")
                }
            }
        }
        catch (err) {
            console.log("erro inesperado com a autenticação")
        }
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


