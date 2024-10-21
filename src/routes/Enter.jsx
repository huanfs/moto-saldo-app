import React, { useRef, useContext } from "react";

import { Context } from "@context/Context.jsx"; //* import context

import { useNavigate } from "react-router-dom"; //* import navigate hook

/* react-icons */
import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
/* react-icons */

import style from "@styles/Enter.module.css"; //* stylesheet

export default function Enter(){

    const { setUserOptions } = useContext(Context); // consuming context

    const navigateTo = useNavigate(); // use navigate hook

    const userName = useRef(null); // references to inputs
    const password = useRef(null);

    async function LogIn(){
        const user = {
            name: userName.current.value,
            password: password.current.value,
        };

        try{
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
                setUserOptions((prevValue)=>({
                    ...prevValue, 
                    userName: userName.current.value, 
                    userPassword: password.current.value,
                }))
                if(data.data){ // case old user (with data) proceed to /main
                    navigateTo("/main")
                }
                else if(!data.data){ // else, if a new user (without data) proceed to *config01
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

