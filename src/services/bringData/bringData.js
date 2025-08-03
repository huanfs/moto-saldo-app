const API_URL = import.meta.env.VITE_API_URL;

export async function BringData({userData, setUserData, userConfig}) {
    let credentials = {};
        const storedData = sessionStorage.getItem("userData");
        if(storedData){
            setUserData(JSON.parse(storedData));
        }
        else if(userData || userConfig){
            try {
                    if(userConfig?.userName && userConfig?.userPassword){
                        credentials = {
                            name: userConfig.userName,
                            password: userConfig.userPassword,
                        }
                    }
                    else if(userData?.userName && userData?.userPassword){
                        credentials = {
                            name: userData.userName,
                            password: userData.userPassword,
                        }
                    }
                    else{
                        console.log("Credenciais ausentes")
                        
                const response = await fetch(`${API_URL}getData`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                });
                if (response.status === 200) { 
                    const result = await response.json(); // Convertendo a resposta em JSON
                    setUserData(JSON.parse(result.data))
                    sessionStorage.setItem("userData", result.data); //salvando no localStorage
                } else {
                    console.log("Usuário não encontrado ou erro no servidor");
                }
            } 
        }catch (err) {
            console.log("Erro no front-end", err);
        }
    }
};