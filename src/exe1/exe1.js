// Conectar el archivo JS al HTML de destino
// Definir en HTML el espacio donde se va a mostrar el mensaje Hello JS
// Crear el elemnto h1

const app = document.getElementById("app");
let innerH1 = function(app){
    app.innerHTML = "<h1>Hello JavaScript</h1>";
}
innerH1(app);



