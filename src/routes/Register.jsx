import React,{ useContext, useRef } from "react"; 

import { Link, useNavigate } from "react-router-dom";  //*REACT-ROUTER-DOM

import { Context } from "@context/context.jsx";  //*IMPORT CONTEXT

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";  //*AN REACT ICON

import style from "@styles/Register.module.css";  //STYLESHEET

export default function Register(){

    const { userOptions, setUserOptions } = useContext(Context);  //* using context

    const navigateTo = useNavigate();  //* useNavigate hook

/*REFERENCE FOR INPUTS USER/PASSWORD*/
    const user = useRef(null);
    const password = useRef(null);
/*REFERENCE FOR INPUTS USER/PASSWORD*/

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
            setUserOptions((prevValue)=>({
                ...prevValue, userName: NewUser, userPassword: NewPassword  //* this function adds userName and password in a object in context
            }))
            console.log(userOptions);
            navigateTo("/enter");  //* finally moves to enter.jsx for login
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