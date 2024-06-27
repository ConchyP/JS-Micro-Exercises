// Conecto el archivo exe2.js a su HTML correspondiente
// Defino en HTML el espacio donde se va a mostrar el resultado mediante un ID
// Creo una función de suma
// Creo otra función con el texto a mostrar
// Declaro las variables de los 2 números dados, el resultado y el texto
// Lo muestro en HTML

function add(num1, num2) {
    return num1 + num2;
}

function text(num1, num2, result) {
    return `La suma de ${num1} + ${num2} es ${result}`;
}

let num1 = 3;
let num2 = 2;
let result = add(num1, num2);
let textResult = text(num1, num2, result);

document.getElementById("operation").innerText = textResult;

