
document.getElementById("button").addEventListener("click", function() {
   
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    function findDividers(number) {
        let dividers = [];

        
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                dividers.push(i);
            }
        }

        return dividers;
    }

 
    let dividersNum1 = findDividers(num1);
    let dividersNum2 = findDividers(num2);

   
    let commonDividers = dividersNum1.filter(divisor => dividersNum2.includes(divisor));

    let resultElement = document.getElementById("result");
    if (commonDividers.length > 0) {
        resultElement.innerText = `Los divisores comunes de ${num1} y ${num2} son: ${commonDividers.join(', ')}`;
    } else {
        resultElement.innerText = `No hay divisores comunes entre ${num1} y ${num2}.`;
    }
});
