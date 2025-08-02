export function FormatHours(input, setAddNewValues){
  // Remove tudo que não é número
  const numericValue = input.replace(/\D/g, '');

  // Insere ":" automaticamente após 2 dígitos (sem forçar 00:)
  if (numericValue.length > 2) {
    return `${numericValue.slice(0, 2)}:${numericValue.slice(2)}`;
  }

  setAddNewValues((prevValue=>({
    ...prevValue,
    time:parseFloat(numericValue.replace(":","."))
  })));

  return numericValue; // Retorna sem ":" se tiver 2 ou menos dígitos
};