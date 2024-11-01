import React,{ createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Globals = ({ children }) => {

    const logo = [
        {"logotype":"src/assets/images/uber-logo.png", "name":"uber"},
        {"logotype":"src/assets/images/99-logo.png", "name":"99"},
        {"logotype":"src/assets/images/ifood-logo.png", "name":"ifood"},
        {"logotype":"src/assets/images/pedeai-logo.png", "name":"pede ai"},
        {"logotype":"src/assets/images/mercadoenvios-logo.png", "name":"merado en."},
    ]

    const[userConfig, setUserConfig] = useState({
        "userName":"",
        "userPassword":"",
        "apps":[],
        "goals":{                   //user configurations
            "money":"",
            "time":"",
        },
        "choice":null,
    });

    const[userData, setUserData] = useState(sessionStorage.userData) // storages te userData received from a fetch in database

    useEffect(()=>{
        const Object = async()=>{ // process the string userData into a object
            if(typeof(userData) == "string"){
                const toObject = await JSON.parse(userData);
                setUserData(toObject);
            }
        }
        Object()
    },[userConfig])

    return(
        <Context.Provider value={{
            logo,
            userConfig,
            setUserConfig,
            userData,
            setUserData
        }}>
            { children }
        </Context.Provider>
    )
}