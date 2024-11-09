
/*
FUNÇÃO QUE LIDA COM O TRATAMENTO DOS VALORES NOS CAMPOS
DE USUÁRIO E SENHA.
*/

export default function IsValidCredentials({ dataType, content }) {

    let isValid = {
        name: true,
        password: true,
    }

    if (dataType == "name") {
        if (content.value.length < 6) {
            content.value = "";
            content.placeholder = "deve ter 6 letras!";
            content.style.borderBottom = "4px solid var(--NegativeRed)";
            isValid.name = false;
        }
        else{
            content.style.borderBottom = "4px solid var(--White)";
            isValid.name = true;
        }
    }

    if (dataType == "password") {
        if (content.value.length < 8) {
            content.value = "";
            content.placeholder = "dete ter 8 letras!";
            content.style.borderBottom = "4px solid var(--NegativeRed)";
            isValid.name = false;
        }
        else{
            content.style.borderBottom = "4px solid var(--White)";
            isValid.password = true;
        }
    }

    return(isValid);
}
