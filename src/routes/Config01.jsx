import React,{ useContext } from "react";

import { Link } from "react-router-dom"; //* react router link component

import { Context } from "@context/context.jsx";  //* import context

import WorkApp from "@components/workApp/WorkApp.jsx";  //* component

import style from "@styles/Config01.module.css";  //* stylesheet

export default function Config01(){

    const { userOptions, setUserOptions, logo } = useContext(Context);    //* using context

    return(
        <main className={style.container}>
            <h1>bem vindo <span>fulano</span></h1>
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
                <Link to=""><input type="button" value="prosseguir"/></Link>
                <Link to=""><p>pular</p></Link>
            </section>
        </main>
    )
}