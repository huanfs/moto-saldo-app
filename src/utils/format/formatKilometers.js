export function FormatKilometers(input, setAddNewValues) {
    // Remove tudo que não é dígito
    const numericValue = input.replace(/\D/g, '');
    
    // Se tiver mais de 2 dígitos, formata com ponto após os 2 primeiros
    if (numericValue.length > 2) {
        return `${numericValue.slice(0, 2)}.${numericValue.slice(2)}`;
    }

    setAddNewValues((prevValue)=>({
        ...prevValue,
        distance:parseFloat(numericValue)
    }));
    
    return numericValue;
}