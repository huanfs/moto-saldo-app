import React,{ createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Globals = ({ children }) => {
    
    const logo = [
        {"logotype":"images/uber-logo.png", "name":"uber"},
        {"logotype":"images/99-logo.png", "name":"99"},
        {"logotype":"images/ifood-logo.png", "name":"ifood"},
        {"logotype":"images/pedeai-logo.png", "name":"pede ai"},
        {"logotype":"images/mercadoenvios-logo.png", "name":"mercado en."},
    ];

    const[userConfig, setUserConfig] = useState({
        "userName":"",
        "userPassword":"",
        "apps":[],
        "goals":{                   
            "money":"",
            "time":"",
        },
        "choice":null,
    });

    const[userData, setUserData] = useState(() => {
        const storedData = sessionStorage.getItem("userData");
        return storedData ? JSON.parse(storedData) : userConfig;
    });

    const[statusMessage, setStatusMessage] = useState("");
    const[showStatusMessage, setShowStatusMessage] = useState(false);

    useEffect(()=>{
        statusMessage != "" && setTimeout(() => {
            setStatusMessage("");
            setShowStatusMessage(false);
        }
        , 5000);
    },[statusMessage]);

    useEffect(() => {
        if (userData) {
            sessionStorage.setItem("userData", JSON.stringify(userData));
        } else {
            sessionStorage.removeItem("userData"); // Limpa se `userData` for null
        }
    }, [userData]);

    return(
        <Context.Provider value={{
            logo,
            userConfig,
            setUserConfig,
            userData,
            setUserData,
            statusMessage,
            setStatusMessage,
            showStatusMessage,
            setShowStatusMessage,
        }}>
            { children }
        </Context.Provider>
    )
}