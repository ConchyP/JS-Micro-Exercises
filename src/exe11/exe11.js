document.getElementById("button").addEventListener("click", function() {

    const number = parseInt(document.getElementById("num1").value);
    const dividers = [2, 3, 5, 7];
    const result = "El número no es divisble ni por 2, ni por 3, ni por 5, ni por 7";

    for (let divider of dividers) {
        if (number % divider === 0) {
            result = `Si, el número es divisible por ${divider}`;
        }
    }

    document.getElementById("result").innerText = result;
});