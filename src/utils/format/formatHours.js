export function FormatHours(input, setAddNewValues){
  // Remove tudo que não é número
  const numericValue = input.replace(/\D/g, '');

  setAddNewValues((prevValue=>({
    ...prevValue,
    time:Number(numericValue)
  })));

  return numericValue; // Retorna sem ":" se tiver 2 ou menos dígitos
};