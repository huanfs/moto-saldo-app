import React,{ useRef,useState, useContext } from "react"; 

import { Link, useNavigate } from "react-router-dom";

import { HandleUserRegistration } from "@utils/register/handleUserRegistration.js";

import { CreateUser } from "@services/register/register.js";

import { Context } from "@context/Context.jsx";

import ArrowButton from "@components/arrowButton/ArrowButton.jsx";

import Loading from "@components/loading/Loading.jsx";

import AlertMessage from "@components/alertMessage/AlertMessage.jsx";

import style from "@styles/Register.module.css";

export default function Register(){

    const{statusMessage, setStatusMessage, showStatusMessage, setShowStatusMessage } = useContext(Context);

    const[isLoading, setIsLoading] = useState(false);

    const navigateTo = useNavigate();

    const user = useRef(null);
    const password = useRef(null);

    /*
    FUNÇÃO DE REGISTRO DE NOVO USUÁRIO
    */
    async function Register(){    
        setIsLoading(true);
        try{
            const isValid = HandleUserRegistration(user.current, password.current);
            const response = await isValid;
            console.log(response);
            if(response.name && response.password == true){
                const register = CreateUser(user.current.value, password.current.value, navigateTo);
                setStatusMessage("Usuário criado!");
                setShowStatusMessage(true);
            }
        }
        catch(err){
            console.log("erro ao registrar usuário: " + err);
            setStatusMessage("Erro ao registrar usuário");
            setShowStatusMessage(true);
        }
        finally{
            setIsLoading(false);
        }
    }

    return(
        <main className={style.container}>
            {
                isLoading && <Loading/>
            }
            {
                showStatusMessage && <AlertMessage msg={statusMessage} action={setShowStatusMessage}/>
            }
            <h1>registrar</h1>
            <form>
                <input type="text" placeholder="crie um nome de usuário" ref={user} maxLength="6"/>
                <input type="password" placeholder="crie uma senha" ref={password} maxLength="8"/>
            </form>
            <section>
                <input type="button" value="registrar" onClick={Register}/>
                <Link to="/"><ArrowButton direction="left"/></Link>
            </section>
        </main>
    )
}
