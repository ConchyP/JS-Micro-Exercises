let numb1 = document.getElementById('num1');
let numb2 = document.getElementById('num2');
let button = document.getElementById('button');
let result = document.getElementById('result');

button.addEventListener('click', () =>{
    let num1 = num1.value;
    let num2 = num2.value;

    showHigher(parseInt(num1),parseInt(num2));

})

function compareNum(num1, num2) {
        if (num1 > num2) {
        show = `El número ${num1} es mayor que ${num2}.`;
        } else if(num2 > num1) {
        show = `El número ${num2} es mayor que ${num1}.`;
        }
        else (num1 === num2) 
        show =  `Ambos números son iguales.`;
        }

