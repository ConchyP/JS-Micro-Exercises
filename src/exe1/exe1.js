// Conectar el archivo JS al HTML de destino
// Definir en HTML el espacio donde se va a mostrar el mensaje Hello JS
// Crear el elemnto h1

const showText = document.getElementById("showText");
let innerH1 = function(showText){
    showText.innerHTML = "<h1>Hello JavaScript</h1>";
}
innerH1(showText);



