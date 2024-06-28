// Conecto archivo wordExistOrNot.js a su html correspondiente (aunque en este caso no es necesario)
// Creo una función llamada containsEnglishWord con valor de tipo string
// Esta función tiene un método .toLowerCase que nos devuelve un nuevo string () entero en minúsculas para poder comparar sin errores 
// Con el metodo .includes verifico si este "nuevo string" contiene la palabra "english"
// Muestro en consola los valores boleanos de diferentes comprobaciones de mi función


function containsEnglishWord(string) {
    return string.toLowerCase().includes("english");
}


console.log(containsEnglishWord("abcEnglishdef")); // true
console.log(containsEnglishWord("abcnEglishsef")); // false
console.log(containsEnglishWord("eNglisH is a language")); // true
console.log(containsEnglishWord("This is in EngLish.")); // true
console.log(containsEnglishWord("Español es un idioma")); // false