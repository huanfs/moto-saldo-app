export function FormatMoney(input, setAddNewValues){
    let numericValue = input.replace(/\D/g, '');

        if(numericValue.length > 2){
            numericValue = numericValue.slice(0, 2) + "," + numericValue.slice(2, 4);
        }

        setAddNewValues((prevValue)=>({
            ...prevValue,
            money:parseFloat(numericValue.replace(",","."))
        }));

        return numericValue;
}