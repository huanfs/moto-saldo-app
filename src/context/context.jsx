import React,{ createContext, useState } from "react";

export const Context = createContext();

export const Globals = ({ children }) => {

    const logo = [
        {"logotype":"src/assets/images/uber-logo.png", "name":"uber"},
        {"logotype":"src/assets/images/99-logo.png", "name":"99"},
        {"logotype":"src/assets/images/ifood-logo.png", "name":"ifood"},
        {"logotype":"src/assets/images/pedeai-logo.png", "name":"pede ai"},
        {"logotype":"src/assets/images/mercadoenvios-logo.png", "name":"merado en."},
    ]

    const[userOptions, setUserOptions] = useState({
        "userName":"",
        "userPassword":"",
        "apps":[],
        "goals":{                   //user info
            "money":"",
            "time":"",
        },
        "choice":null,
    });

    return(
        <Context.Provider value={{
            userOptions,
            setUserOptions,
            logo,
        }}>
            { children }
        </Context.Provider>
    )
}