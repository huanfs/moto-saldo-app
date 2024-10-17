import React, { useRef } from "react";

import { useNavigate } from "react-router-dom"; //* import navigate hook

/* react-icons */
import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
/* react-icons */

import style from "@styles/Enter.module.css"; //* stylesheet

export default function Enter(){

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
            }).then((response)=>{
                response.status == 200 ? navigateTo("/config01") : null;
            })
        }
        catch (err) {
            console.log(err)
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

// este componente de entrada é responsável pela autenticação do usuário
// a função LogIn() é a responsável por armazenar os valores nos campos
// de nome de usuario e senha através das suas respectivas referencias 
//capturadas através do hook useRef do react.
// então cria um objeto user que contém name e password recebendo os valores
// das respectivas referências.
// então executa um bloco try catch onde try faz uma requisição do tipo POST
// para a rota /authenticate e envia o objeto user no corpo da requisição

// a api recebe os valores e executa a consulta, se o usuário estiver no banco
// retorna a mensagem de estatos 200 OK e então o hook useNavigate do react-router-dom
// é executado direcionando imediatamente para a rota /main 

 /*
 são necessárias alterações com o direcionamento direto para MAIN onde se caso o usuário for novo
 (que será descoberto realizando busca para as outras tabelas) decide direcionar para as rotas de
 configuração ou não.
 */