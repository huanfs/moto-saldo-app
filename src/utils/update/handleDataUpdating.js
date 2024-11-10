

export async function UpdateStatistics(
    appIcon,
    money,
    distance,
    time,
    setUserData,
    addNewValues,
    btnIsDisabled,
    setBtnIsDisabled,
    close,
) {
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
    return true;
}