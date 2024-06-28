let numb1 = document.getElementById('num1');
let numb2 = document.getElementById('num2');
let buttonV = document.getElementById('button');
let textResult = document.getElementById('result');

 buttonV.addEventListener('click', () =>{
    let inputNum1 = numb1.value;
    let inputNum2 = numb2.value;

    addNum(parseInt(inputNum1),parseInt(inputNum2));

 })

 function addNum(num1, num2){
    let add = num1, num2;
    textResult.innerHTML = `La suma de ${num1} con ${num2} es ${result}`;
 }