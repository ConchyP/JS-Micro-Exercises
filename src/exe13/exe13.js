document.getElementById("button").addEventListener("click", function() {

    let number = parseInt(document.getElementById("num1").value);
    let results = [];

    for (let i = 1; i <= number; i++) {

        if (number % i === 0) {
            results.push(i);
        }
    }

    document.getElementById("result").innerText = `Los divisores de ${num} son: ${results.join(', ')}`;
});