const API_URL = import.meta.env.VITE_API_URL;
/*
RECEBE AS REFERÊNCIAS DOS ELEMENTOS INPUT E A VARIAVEL
QUE ARMAZENA O HOOK 'useNavigate' PARA REALIZAR O CAD
-ASTRO DO NOVO USUÁRIO.
*/
export async function CreateUser(name, password){
    try{
        const data = {
            name: name,
            password: password,
        };
        const create = await fetch(`${API_URL}createUser`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data),
        });
        if(create.status == 200){
            console.log("usuario criado");
            return true;
        }
    }
    catch(err){
        console.log("erro ao criar usuário");
        return false;
    }
}