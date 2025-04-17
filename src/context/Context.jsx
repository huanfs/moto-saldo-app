import React,{ createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Globals = ({ children }) => {
    
    const logo = [
        {"logotype":"src/assets/images/uber-logo.png", "name":"uber"},
        {"logotype":"src/assets/images/99-logo.png", "name":"99"},
        {"logotype":"src/assets/images/ifood-logo.png", "name":"ifood"},
        {"logotype":"src/assets/images/pedeai-logo.png", "name":"pede ai"},
        {"logotype":"src/assets/images/mercadoenvios-logo.png", "name":"merado en."},
    ];

    /*
    ESTADO QUE ARMAZENA AS CONFIGURAÇÕES E DADOS DE UM NOVO USUÁRIO
    */
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

    /*
    CRIA UM ESTADO COM OS VALORES CONTIDOS DENTRO DE 'sessionStorage.userData'
    CONVERTENDO-O EM OBJETO. DO CONTRÁRIO, DEFINE O ESTADO COM OS VALORES CONTIDOS
    DENTRO DO ESTADO 'userConfig'.
    */
    const[userData, setUserData] = useState(() => {
        const storedData = sessionStorage.getItem("userData");
        return storedData ? JSON.parse(storedData) : userConfig;
    });

    /*ARMAZENA MENSAGENS DE STATUS DA REQUISIÇÃO À API E SE DEVE SER EXIBIDA*/
    const[statusMessage, setStatusMessage] = useState("");
    const[showStatusMessage, setShowStatusMessage] = useState(false);

    /*APAGA A MENSAGEM DO ESTADO APÓS UM TEMPO*/
    useEffect(()=>{
        statusMessage != "" && setTimeout(() => {
            setStatusMessage("");
            setShowStatusMessage(false);
        }
        , 5000);
    },[statusMessage]);

    /*
    SALVA DENTRO DE 'sessionStorage' OS VALORES CONTIDOS
    NO ESTADO 'userData' EM FORMATO DE STRING JSON, DO CONTRÁRIO
    REMOVE O ITEM DE 'sessionStorage'.
    */
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