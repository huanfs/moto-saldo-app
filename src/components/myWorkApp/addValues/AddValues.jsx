import React,{ useContext, useRef, useState, useEffect } from "react";

import { Context } from "@context/Context.jsx";

import { IoMdClose } from "react-icons/io"; 

import style from "./AddValues.module.css";

function AddValues({ close, appImage, alt }){

    const { userData, setUserData } = useContext(Context);

    const[btnIsDisabled, setBtnIsDisabled] = useState(true);

/*
    ESTADO QUE ARMAZENA OS VALORES INSERIDOS NOS INPUTS DESTE COMPONENTE
    E O CAMINHO RELATIVO A UMA IMAGEM DE APLICATIVO RECEBIDA COMO PROPRIE
    -DADE
*/
    const[addNewValues , setAddNewValues] = useState({ 
        "app":alt,
        "money":0,
        "distance":0,
        "time":0
    })

/*
    REFERÊNCIAS AOS ELEMENTOS DO TIPO 'INPUT' DENTRO
    DESTE COMPONENTE
*/
    const appIcon = useRef(null);
    const money = useRef(null);
    const distance = useRef(null);
    const time = useRef(null);

/*
    FUNÇÃO QUE VERIFICA SE OS CAMPOS POSUEM ALGUM VALOR VÁLIDO INSERIDO
    ENTÃO ADICIONA CADA UM DOS VALORES DENTRO DO ESTADO 'userData' PROV
    -ENIENTE DO CONTEXTO COM A FUNÇÃO ATUALIZADORA DESTE ESTADO TAMBEM
    PROVENIENTE DO CONTEXTO.
    OS VALORES SÃO ADICIONADOS ATRAVÉS DA SOMA DOS VALORES ANTERIORES 
    COM OS NOVOS VALORES INSERIDOS NOS CAMPOS CORRESPONDENTES. 
*/
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
        close(false); // fecha o componente usando a função atualizadora de estado recebida através de 'props'.
        setBtnIsDisabled(!btnIsDisabled); //desativa o botão de adicionar valores alterando o valor do estado 'btnIsDisabled'.
    }
    UpdateData();
}

/*
    ALTERNA O VALOR DO ESTADO 'btnIsDisabled' DEPENDENDO SE OS CAMPOS
    POSSUEM VALORES VÁLIDOS INSERIDOS OU NÃO.
*/
useEffect(() => {
    const checkFields = () => {
        const hasContent = 
            money.current?.value.trim() !== "" &&
            distance.current?.value.trim() !== "" &&
            time.current?.value.trim() !== "";
        setBtnIsDisabled(!hasContent);
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

/*
    REALIZA UMA CHAMADA PARA A API PASSANDO VALORES DE 'name' e 'password'
    QUE SERÃO UTILIZADOS PARA BUSCAR UM USUÁRIO NO BANCO DE DADOS ENTÃO ATU
    -ALIZA 'data' ATRAVÉS DE 'data' ( que recebe os valores dentro de session
    Storage)
*/
async function UpdateData() {
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
            disabled={btnIsDisabled}
            style={{ opacity: btnIsDisabled ? 0.8 : 1 }}/>
        </article>
    )
}

export default AddValues;