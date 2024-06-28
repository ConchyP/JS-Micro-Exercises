// Conecto el archivo exe3.js a su HTML correspondiente
// Creo un texto que indique donde introducir el nombre 
// Creo un botón que recoja ese nombre de usuario con un id 
// Creo la función greet llamando al id y indicando el texto de saludo
// Muestro el saludo más el nombre introducido

function greet() {

    const userName = document.getElementById("username").value;

    let textGreet = `¡ Hola ${userName} !`;

    document.getElementById("greeting").innerText = textGreet;
}