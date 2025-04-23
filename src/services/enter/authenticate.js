
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
        }));
        if(data.data){ //caso o usuário já seja cadastrado, recebe e salva seus dados no estado 'userData' e navega para a página 'Main.jsx'
            if(typeof(data.data) == "object"){
                setUserData(data.data);
            }
            else if(typeof(data.data) == "string"){
                setUserData(JSON.parse(data.data))
            }
           setTimeout(() => {
            navigate("/main");
           },2000);
        }
        else if(!data.data){ // caso o usuário seja novo, procede para a página config01.jsx para iniciar configurações de conta
            setTimeout(() => {
                navigate("/config01");
            },2000);
        }
        return searchUser.status;
    }
}
    catch (err) {
        console.log("erro inesperado com a autenticação " + err);
    }
}