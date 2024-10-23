import React,{ useContext, useEffect, useState  } from "react";

/*components*/
    import Header from "@components/header/Header.jsx";
    import MyWorkApp from "@components/myWorkApp/MyWorkApp.jsx";
/*components*/

import { Context } from "@context/Context.jsx";

import style from "@styles/Main.module.css";

export default function Main(){
    
    const { userConfig } = useContext(Context); // using context

    const[userData, setUserData] = useState(localStorage.getItem("userData")); //* persistent state of userData

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = {
                    name: userConfig.userName,
                    password: userConfig.userPassword
                };
                const response = await fetch("http://localhost:8182/getData", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                if (response.status === 200) {
                    const result = await response.json(); // Convertendo a resposta em JSON
                    localStorage.setItem("userData", result.data); //salvando no localStorage
                } else {
                    console.log("Usuário não encontrado ou erro no servidor");
                }
            } catch (err) {
                console.log("Erro no front-end", err);
            }
        };
        fetchData();
    }, [userConfig]); // Dependência para executar quando 'userConfig' mudar

    /*aqui transforma o objeto recuperado do banco de dados
    e salvo dentro de localStorage como string dentro do estado
    userData em formato objeto*/ 
    useEffect(()=>{
        const obj = async()=>{
            const toObject = await JSON.parse(userData);
            setUserData(toObject)
        }
        obj();
    })


    return(
        <main className={style.container}>
            <Header/>
            <section>
                {
                    typeof(userData) == "object" ? userData.apps.map((item, index)=>{
                        return(
                            <MyWorkApp 
                            key={index}
                            appLogo={item.appName}/>
                        )
                    }) : userConfig.apps.map((item, index)=>{
                        return(
                            <MyWorkApp
                            key={index}
                            appLogo={item.appName}/>
                        )
                    })
                }
            </section>
        </main>
    )
}