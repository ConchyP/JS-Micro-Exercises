// Conecto el archivo exe1.j a su HTML correspondiente
// Defino en HTML el espacio donde se va a mostrar el mensaje Hello JS mediante un ID
// Creo el elemento h1
// Indico el mensaje a mostrar


const showText = document.getElementById("showText");
let innerH1 = function(showText){
    showText.innerHTML = "<h1>Hello JavaScript</h1>";
}
innerH1(showText);
