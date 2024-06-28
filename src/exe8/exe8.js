
document.getElementById("button").addEventListener("click", function() {
    const inputPhrase = document.getElementById("phrase").value.toLowerCase();
    let vowels = new Set();
    
    for (let i = 0; i < inputPhrase.length; i++) {
        let character = inputPhrase[i];
        if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
            vowels.add(character);
        }
    }

    let vowelsArray = Array.from(vowels);

    document.getElementById("result").textContent = `Las vocales en la frase son ${vowelsArray}`;
});
