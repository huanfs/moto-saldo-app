import React,{ useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "@context/context.jsx";

import WorkApp from "@components/workApp/WorkApp.jsx";

import style from "@styles/Config01.module.css";

export default function Config01(){

    const { logo, userConfig } = useContext(Context);

    return(
        <main className={style.container}>
            <h1>bem vindo
                <span>
                   { 
                    userConfig?.userName ? userConfig.userName : "Motoboy"
                   }
                </span>
            </h1>
            <article>
                <h2>em quais aplicativos voce trabalha:</h2>
                    <article>
                        {
                            logo.map((item, index)=>{
                                return(
                                    <WorkApp 
                                    logotype={item.logotype} 
                                    name={item.name} 
                                    key={index} />
                                )
                            })
                        }
                    </article>
            </article>
            <section>
                <Link to="/config02"><input type="button" value="prosseguir"/></Link>
                <Link to="/"><p>voltar</p></Link>
            </section>
        </main>
    )
}
