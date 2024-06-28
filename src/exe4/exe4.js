

// document.getElementById("button").addEventListener("click", function() {
   
//     const num1 = parseFloat(document.getElementById("num1").value);
//     const num2 = parseFloat(document.getElementById("num2").value);
    
//     function add(num1, num2) {
//         return num1 + num2;
//     }

//     const result = add(num1, num2);

//     document.getElementById.apply("result").innerText = `La suma de ${num1} con ${num2} es ${result}`;
// });

document.getElementById("button").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    function add(num1, num2) {
        return num1 + num2;
    }

    const result = add(num1, num2);

    document.getElementById("result").innerText = `La suma de ${num1} con ${num2} es ${result}`;
});
