


document.getElementById("button").addEventListener("click", function() {
    const inputPhrase = document.getElementById("phrase").value.toLowerCase();
    let counter = 0;
    
    for (let i = 0; i < inputPhrase.length; i++) {
        let character = inputPhrase[i];
        if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
            counter++;
        }
    }

    document.getElementById("result").textContent = `El número de vocales en la frase es ${counter}`;
});
