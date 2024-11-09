import React,{ useContext, useRef } from "react"; 

import { Link, useNavigate } from "react-router-dom";

import { Context } from "@context/context.jsx";

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";

import style from "@styles/Register.module.css";

export default function Register(){

    const { setUserConfig } = useContext(Context);

    const navigateTo = useNavigate();

    const user = useRef(null);
    const password = useRef(null);

    /*
    FUNÇÃO DE REGISTRO DE NOVO USUÁRIO
    */
    function Register(){
        if(user.current.value.length < 6){
            user.current.value="";
            user.current.placeholder="precisa ao menos 6 letras!";
            user.current.style.borderBottom="4px solid red";
        }
        if(password.current.value.length < 8){
            password.current.value="";
            password.current.placeholder="precisa ao menos 8 letras";
            password.current.style.borderBottom="4px solid red";
        }
        else{
            const NewUser = user.current.value;
            const NewPassword = password.current.value;
            setUserConfig((prevValue)=>({
                ...prevValue, userName: NewUser, userPassword: NewPassword,
            }))
            CreateUser(); //caso os dados estejam ok, chama a função para criar usuário
            
        }
    }

    /*
    CRIA UM NOVO USUÁRIO NO BANCO DE DADOS
    */
    async function CreateUser(){
        try{
            const data = {
                name: user.current.value,
                password: password.current.value,
            };
            const create = await fetch("http://localhost:8182/createUser",{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json",
                },
                body: JSON.stringify(data),
            });
            if(create.status == 200){
                navigateTo("/enter");
            }
        }
        catch(err){
            console.log("erro com ao criar usuário")
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
