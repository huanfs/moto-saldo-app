
/*
BUSCA UM USUÁRIO EXISTENTE NO BANCO DE DADOS
ATRAVÉS DOS PARÂMETROS DE NOME E SENHA, RETORNA
A RESPOSTA DO SERVIDOR.
*/
export async function Authenticate(name, password, setUserConfig, setUserData, navigate){
    try{
    const user = {
        name: name.value,
        password: password.value,
    };
    const searchUser = await fetch("http://localhost:8182/authenticate",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
        mode:"cors",
    })
    if(searchUser.status == 200){
        const data = await searchUser.json()
        setUserConfig((prevValue)=>({
            ...prevValue, 
            userName: name.value, 
            userPassword: password.value,
        }))
        if(data.data){ //caso o usuário já seja cadastrado, recebe e salva seus dados no estado 'userData' e navega para a página 'Main.jsx'
            setUserData(JSON.parse(data.data))
            navigate("/main");
        }
        else if(!data.data){ // caso o usuário seja novo, procede para a página config01.jsx para iniciar configurações de conta
            navigate("/config01");
        }
    }
}
    catch (err) {
        console.log("erro inesperado com a autenticação")
    }
}