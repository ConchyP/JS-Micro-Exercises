// Conecto el archivo exe3.js a su HTML correspondiente
// Creo los inputs para introducir los números
// Creo el botón de validar
// Indico con un id donde se va a mostrar el mensaje del resultado
// Declaro las constantes de los números, el botón y el resultado
// Creo una función de suma
// Creo la función del botón

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let button = document.getElementById('button');
let textResult = document.getElementById('result');

function button.addEventListener("click", function() {

    let num1 = parseFloat(numb1.value);
    let num2 = parseFloat(numb2.value);

    const result = add(num1Value, num2Value);
    textResult.innerText = `La suma de ${num1} con ${num2} es ${result}`;
})

function add(num1, num2) {
    return num1 + num2;
}
