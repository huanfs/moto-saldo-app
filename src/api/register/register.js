
/*
RECEBE AS REFERÊNCIAS DOS ELEMENTOS INPUT E A VARIAVEL
QUE ARMAZENA O HOOK 'useNavigate' PARA REALIZAR O CAD
-ASTRO DO NOVO USUÁRIO.
*/
export async function CreateUser(name, password, navigate){
    try{
        const data = {
            name: name,
            password: password,
        };
        const create = await fetch("http://localhost:8182/createUser",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
            },
            body: JSON.stringify(data),
        });
        if(create.status == 200){
            console.log("usuario criado")
            navigate("/enter"); //navega para a rota 'enter'.
        }
    }
    catch(err){
        console.log("erro com ao criar usuário")
    }
}