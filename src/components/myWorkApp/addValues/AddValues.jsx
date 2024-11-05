import React,{ useContext, useRef, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx"; //  importação do contexto

import { IoMdClose } from "react-icons/io"; // react-icon

import style from "./AddValues.module.css"; // estilização 

function AddValues({ close, appImage, alt }){

    const { userData, setUserData } = useContext(Context); // utilização do contexto

    const[isDisabled, setIsDisabled] = useState(true); //estado que controla a tivação e desativação do botão de adicionar valores

    const[addNewValues , setAddNewValues] = useState({ // estado que armazena os valores inseridos no componente para os campos de: "money", "disdtance", "time" e o nome do aplicativo "app"
        "app":alt,
        "money":0,
        "distance":0,
        "time":0
    })

/*referências aos elementos do tipo 'input'*/
    const appIcon = useRef(null);
    const money = useRef(null);
    const distance = useRef(null);
    const time = useRef(null);
/*referências aos elementos do tipo 'input'*/

async function AddStatistics() {
    if (
        money.current?.value.trim() !== "" &&
        distance.current?.value.trim() !== "" &&
        time.current?.value.trim() !== ""
    ) {
        setUserData((prevValue) => ({
            ...prevValue,
            apps: prevValue.apps.map((item) => {
                if (item.appName === appIcon.current.alt) {
                    return {
                        ...item,
                        total: Number(item.total) + (addNewValues.money),
                        distance: parseFloat(item.distance) + (addNewValues.distance),
                        time: item.time + addNewValues.time,
                    };
                }
                return item;
            })
        }));
        close(false); // Fecha o componente
        setIsDisabled(!isDisabled); //desativa o botão de adicionar valores
    }
    updateData();
}

useEffect(() => {
    const checkFields = () => {
        const hasContent = 
            money.current?.value.trim() !== "" &&
            distance.current?.value.trim() !== "" &&
            time.current?.value.trim() !== "";
        setIsDisabled(!hasContent);
    };

    // Adiciona eventos para verificar os campos quando há alterações
    money.current?.addEventListener("input", checkFields);
    distance.current?.addEventListener("input", checkFields);
    time.current?.addEventListener("input", checkFields);

    // Remove eventos ao desmontar o componente
    return () => {
        money.current?.removeEventListener("input", checkFields);
        distance.current?.removeEventListener("input", checkFields);
        time.current?.removeEventListener("input", checkFields);
    };
}, []);


async function updateData() {
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
            console.log("Dados atualizados com sucesso!");
        } else {
            console.error("Erro ao atualizar dados: " + response.status);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
    console.log(user);
}

    return(
        <article className={style.new}> 
            <button 
            type="button"
            className={style.close}
            onClick={()=>{close(false)}}>
                <IoMdClose/> 
            </button>

            <img ref={appIcon} src={appImage} alt={alt}/>

            <input 
            ref={money}
            type="text" 
            placeholder="ganhos" 
            maxLength="8"
            onChange={((event)=>{
                let money = event.target.value.replace(/\D/g, '');
                if(money.length > 2){
                    money = money.slice(0, 2) + "," + money.slice(2, 4);
                }
                event.target.value = money;

                setAddNewValues((prevValue)=>({
                    ...prevValue,
                    money:parseFloat(money.replace(",","."))
                }))
            })}/>

            <input 
            ref={distance} 
            type="text" 
            maxLength="4"
            placeholder="KM/percorridos"
            onChange={(event)=>{
                let distance = event.target.value.replace(/\D/g,'');
                if(distance.length > 2){
                    distance = distance.slice(0, 2) + "." + distance.slice(2, 3)
                }
                event.target.value = distance;
                setAddNewValues((prevValue)=>({
                    ...prevValue,
                    distance:parseFloat(distance)
                }))
            }}/>

            <input ref={time} 
            type="text" 
            maxLength="5"
            placeholder="horas/minutos gastos"
            onChange={(event)=>{
                let time = event.target.value.replace(/\D/g,'');
                if(time.length > 2){
                    time = time.slice(0, 2) + ":" + time.slice(2, 4)
                }
                event.target.value = time

                setAddNewValues((prevValue)=>({
                    ...prevValue,
                    time:parseFloat(time.replace(":","."))
                }))
            }}/>

            <span>
                {
                    money.current && money.current.value ? money.current.value : "00,00"
                }
            </span>

            <input 
            type="button" 
            value="adicionar" 
            onClick={AddStatistics} 
            disabled={isDisabled}
            style={{ opacity: isDisabled ? 0.8 : 1 }}/>
        </article>
    )
}

export default AddValues;


/*  
    29 - funcionalidade do componente  'AddStatistics()'.

    30
    -> - checa se os campos de cada elemento input possui algum valor válido dentro deles
    34

    35   utiliza a funcação atualizadora de estado importada do contexto para mapear o array 'apps' cuja propriedade
    -> - 'appName' seja igual ao atributo 'alt' (recebido por 'props') da imagem referenciada por  'appIcon', então
    -> - insere nos campos 'total','distance' e 'time' a soma dos valores pré existentes no estado com os valores inseridos
    48   no estado 'addNewValues'.

    54   useEffect que verifica se existem valores válidos nos campos dos inputs para então inverter o valor booleano
    -> - no estado 'isDisabled' ativando então o botão.
    61


    82 - icone de 'X' importado do react-icons dentro de um botão que usa a função de atualização de estado
         recebida por 'props' do componente 'MyWorkApps.jsx' para 'false'. 

    85 - uma imagem que recebe no atributo 'src' o caminho relativo a uma imagem do aplicativo selecionado
         recebido através de 'props' do componente 'MyWorkApp.jsx'. 
    
    92   função que formata os valores inseridos no input removendo caracteres não numéricos e insere dinâmicamente
    -> - uma vírgula se o número de caracteres numéricos digitados for superior a 2, por fim. atualiza o estado
    102  'AddNewValues' com o valor inserido transformado em um número decimal e subistituindo a ',' por '.' ao salvar.

    110  função atribuída ao input que tem por objetivo formatar os valores inseridos no campo removendo caracteres não
    -> - numéricos e inserindo um '.' caso o número de caracteres inseridos dentro do input seja maior que 2, por fim.
    119  atualiza o estado AddNewValues com o valor inserido transformado em número decimal.

    126  funcão atribuída ao input que tem por objetivo tratar os valores inseridos, removendo quaisquer caracteres não
    -> - numéricos e inserindo um ':' caso o número de caracteres inseridos seja mair que 2, por fim, salva dentro do estado
    136  'AddNewValues' o valor inserido subistituindo o ':' por '.' e trtansformando-o em numero decimal.  
*/