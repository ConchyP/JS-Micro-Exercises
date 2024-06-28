

document.getElementById("button").addEventListener("click", function() {

    let number = parseInt(document.getElementById("num1").value);

    if (esPrimo(number)) {
        document.getElementById("result").innerText = `Si, ${number} es un número primo`;
    } else {
        document.getElementById("result").innerText = `No, ${number} no es un número primo`;
    }
});

function esPrimo(number) {
    
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
