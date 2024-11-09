
/*
VERIFICA SE O FORMATO DE NOME E SENHA
ESTÃO ACEITOS. (CONTENDO 6 E 8 DIGITOS).
*/
export async function HandleUserRegistration(user, password){

    let isValidCredentials = {
        "name":false,
        "password":false,
    };

    console.log(user, password)

    if(user.value.length < 6){
        user.value="";
        user.placeholder="deve ter 6 letras!";
        user.style.borderBottom="4px solid var(--NegativeRed)";
    }
    else{
        user.style.borderBottom="4px solid var(--White)";
        isValidCredentials.name=true;
    }
    if(password.value.length < 8){
        password.value="";
        password.placeholder="deve ter 8 letras!";
        password.style.borderBottom="4px solid var(--NegativeRed)";
    }
    else{
        password.style.borderBottom="4px solid var(--White)";
        isValidCredentials.password=true;
    }

    return isValidCredentials;
}
