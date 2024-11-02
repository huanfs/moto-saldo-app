import React,{ useContext, useEffect  } from "react";

/*components*/
    import Header from "@components/header/Header.jsx";
    import MyWorkApp from "@components/myWorkApp/MyWorkApp.jsx";
/*components*/

import { Context } from "@context/Context.jsx";

import style from "@styles/Main.module.css";

export default function Main(){
    
    const { userData, setUserData, userConfig } = useContext(Context); // using context

    const[data, setData] = React.useState();

    useEffect(() => {
        let dataPayLoad = {};
        const fetchData = async () => {
            if(userData || userConfig){
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
                        console.log(dataPayLoad)

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
        console.log(dataPayLoad)
    }, [setUserData]);


    return(
        <main className={style.container}>
            <Header/>
            <section>
                {
                    typeof(userData) == "object" && userData.apps.map((item, index)=>{
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

/*
    this route receibe 'userData' from context.
    (userData is an object extracted from localStorage).
    userData refers to user table in database, with all configurations
    inside him.
    useEffect hook on this route search the user in database and then
    receive the 'data' in string format and turns into an object
    wisth 'JSON.parse()' method.
    if all ok, saves the result in localStorage. (later, the context will treat this).
    else show an error image on console.
*/