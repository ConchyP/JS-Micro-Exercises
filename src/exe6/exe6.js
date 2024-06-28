// Conecto el archivo exe6.js a su HTML correspondiente
// Creo los inputs para introducir los números
// Creo el botón de comparar los números
// Indico con un id donde se va a mostrar el mensaje del resultado
// Creo la función del botón
// Recojo los numeros dados
// Verifico si los numeros son números y si no, muestro un mensaje 
// Comparo los números 
// Muestro el resultado


document.getElementById("button").addEventListener("click", function() {
   
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

   
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor ingrese tres números válidos.");
        return;
    }

    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }

    document.getElementById("result").innerText = `El número mayor es ${mayor}.`;
});
