
document.getElementById("button").addEventListener("click", function() {
    const inputPhrase = document.getElementById("phrase").value.toLowerCase();
    let counter = 0;
    
    for (let i = 0; i < inputPhrase.length; i++) {
        if (inputPhrase[i] === "a") {
            counter++;
        }
    }

    document.getElementById("result").textContent = `El número de letras 'a' es ${counter}`;
});
