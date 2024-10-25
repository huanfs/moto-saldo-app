import React,{ useContext, useEffect  } from "react";

/*components*/
    import Header from "@components/header/Header.jsx";
    import MyWorkApp from "@components/myWorkApp/MyWorkApp.jsx";
/*components*/

import { Context } from "@context/Context.jsx";

import style from "@styles/Main.module.css";

export default function Main(){
    
    const { userData } = useContext(Context); // using context


    useEffect(() => {
        const fetchData = async () => {
            if(userData && userData.userName && userData.userPassword){
                try {
                    const data = {
                        name: userData.userName,
                        password: userData.userPassword
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
                    console.log(data)
                } catch (err) {
                    console.log("Erro no front-end", err);
                }
            }
        };
        fetchData();
    }, [userData]);


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