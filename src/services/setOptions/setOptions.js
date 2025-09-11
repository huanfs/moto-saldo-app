const API_URL = import.meta.env.VITE_API_URL;
/*
ENVIA PARA O BANCO DE DADOS O ESTADO 'userConfig'
NO FORMADO DE STRING JSON.
*/
export async function SetOptions(userConfig, navigateTo, setIsLoading, userData, setUserData){
    setIsLoading(true);
    try{
        const saveOptions = await fetch(`${API_URL}createOptions`,{
            method:"PUT",
            headers:{
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(userConfig),
            mode:"cors",
        });
        if(saveOptions){
            setTimeout(()=>{
                navigateTo("/main");
            }, 1000);
        }
        else{
            console.log("não foi possivel salvar as configurações");
        }
    }
    catch(err){
        console.log("erro ao salvar configurações " + err)
    }
    finally{
        setIsLoading(false);
        userData ? setUserData(userConfig) : sessionStorage.setItem("userData", JSON.stringify(userConfig));
    }
}