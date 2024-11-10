
/*
ENVIA PARA O BANCO DE DADOS O ESTADO 'userConfig'
NO FORMADO DE STRING JSON.
*/
export async function SetOptions(userConfig){
    try{
        const saveOptions = await fetch("http://localhost:8182/createOptions",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
            },
            body:JSON.stringify(userConfig),
            mode:"cors",
        });
    }
    catch(err){
        console.log("erro ao salvar configurações " + err)
    }
}