import React,{ useContext, useEffect  } from "react";

/*componentes*/
    import Header from "@components/header/Header.jsx";
    import MyWorkApp from "@components/myWorkApp/MyWorkApp.jsx";
/*componentes*/

import { BringData } from "@services/bringData/bringData.js";

import { Context } from "@context/Context.jsx"; // importação do contexto

import style from "@styles/Main.module.css"; // estilização
 
export default function Main(){
    
    const { userData, setUserData, userConfig } = useContext(Context); // usando o contexto

    useEffect(()=>{
        BringData({userData, setUserData, userConfig});
    },[setUserData]);

    /*useEffect(() => {
        let dataPayLoad = {};
        const fetchData = async () => {
            const storedData = sessionStorage.getItem("userData");
            if(storedData){
                setUserData(JSON.parse(storedData));
            }
            else if(userData || userConfig){
                try {
                        if(userConfig?.userName && userConfig?.userPassword){
                            dataPayLoad = {
                                name: userConfig.userName,
                                password: userConfig.userPassword,
                            }
                        }
                        else if(userData?.userName && userData?.userPassword){
                            dataPayLoad = {
                                name: userData.userName,
                                password: userData.userPassword,
                            }
                        }

                    const response = await fetch("http://localhost:8182/getData", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(dataPayLoad),
                    });
                    if (response.status === 200) { 
                        const result = await response.json(); // Convertendo a resposta em JSON
                        setUserData(JSON.parse(result.data))
                        sessionStorage.setItem("userData", result.data); //salvando no localStorage
                    } else {
                        console.log("Usuário não encontrado ou erro no servidor");
                    }
                } catch (err) {
                    console.log("Erro no front-end", err);
                }
            }
        };
        fetchData();
    }, [setUserData]);*/


    return(
        <main className={style.container}>
            <Header/>
            <section>
                {/*
                    typeof(userData) == "object" && userData.apps.map((item, index)=>{
                        return(
                            <MyWorkApp 
                            key={index}
                            appLogo={item.appName}/>
                        )
                    })
                */}
                {
                    userData?.apps?.map((item, index) => (
                        <MyWorkApp 
                            key={index}
                            appLogo={item.appName}
                        />
                    ))  
                }
            </section>
        </main>
    )
}

