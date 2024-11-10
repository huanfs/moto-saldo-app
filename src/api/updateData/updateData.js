/*
    REALIZA UMA CHAMADA PARA A API PASSANDO VALORES DE 'name' e 'password'
    QUE SERÃO UTILIZADOS PARA BUSCAR UM USUÁRIO NO BANCO DE DADOS ENTÃO ATU
    -ALIZA 'data' ATRAVÉS DE 'data' ( que recebe os valores dentro de session
    Storage)
*/
export async function UpdateData(userData) {
    const user = {
        name: userData.userName,
        password: userData.userPassword,
        data: JSON.parse(sessionStorage.getItem("userData")),
    };
    try {
        const response = await fetch("http://localhost:8182/updateData", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.status == 200) {
            console.log("Dados atualizados com sucesso!"); // DEVE APAREÇER NA TELA!
        } else {
            console.error("Erro ao atualizar dados: " + response.status); // DEVE APAREÇER NA TELA!
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }

    return true;
}