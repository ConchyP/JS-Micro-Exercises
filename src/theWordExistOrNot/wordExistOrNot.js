// Conecto archivo wordExistOrNot.js a su html correspondiente
// Creo una función llamada containsEnglishWord

function containsEnglishWord(string) {
    return string.toLowerCase().includes("english");
}


console.log(containsEnglishWord("abcEnglishdef")); // true
console.log(containsEnglishWord("abcnEglishsef")); // false
console.log(containsEnglishWord("eNglisH is a language")); // true
console.log(containsEnglishWord("This is in EngLish.")); // true
console.log(containsEnglishWord("Español es un idioma")); // false