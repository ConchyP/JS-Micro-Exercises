
document.getElementById("button").addEventListener("click", function() {
    const inputPhrase = document.getElementById("phrase").value.toLowerCase();
    const vowelCounts = {'a': 0  ,  'e': 0  ,  'i': 0  ,  'o': 0  ,  'u': 0};
    
    for (let i = 0; i < inputPhrase.length; i++) {
        let character = inputPhrase[i];
        if (character in vowelCounts) {
            vowelCounts[character]++;
        }
    }

    let resultText = "El número de veces que aparece cada vocal en la frase es:\n";
    for (let vowel in vowelCounts) {
        resultText += `${vowel}: ${vowelCounts[vowel]}\n`;
    }

    document.getElementById("result").textContent = resultText;
});