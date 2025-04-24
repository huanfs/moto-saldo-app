/*
    CRIA NO ESTADO 'userConfig.apps' UM OBJETO
    COM AS PROPRIEDADES DE 'name', 'total',
    'distance' e 'time'.
    */

    function AddApp(event, isSelected, setIsSelected, userConfig, setUserConfig, name){
        setUserConfig((prevValue) => {
            const alreadyExists = prevValue.apps.some(app => app.appName === name);
            if (alreadyExists) return prevValue;
        
            return {
                ...prevValue,
                apps: [...prevValue.apps, {
                    appName: name,
                    total: 0,
                    distance: 0,
                    time: 0
                }]
            };
        });
        setIsSelected(!isSelected);
    }

    function RemoveApp(event, isSelected, setIsSelected, userConfig, setUserConfig, name) {
        setUserConfig((prevValue) => ({
            ...prevValue,
            apps: prevValue.apps.filter((app) => app.appName !== name),
        }));
        setIsSelected(!isSelected);
    }

    export async function HandleClick(event,isSelected,setIsSelected,userConfig,setUserConfig,name){
        if (isSelected) {
            RemoveApp(event,isSelected,setIsSelected,userConfig,setUserConfig,name);
        } else {
            AddApp(event,isSelected,setIsSelected,userConfig,setUserConfig,name);
        }
    }