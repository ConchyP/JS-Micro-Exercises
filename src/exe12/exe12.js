document.getElementById("button").addEventListener("click", function() {

    let number = parseInt(document.getElementById("num1").value);
    let dividers = [2, 3, 5, 7];
    let results = [];

    for (let divider of dividers) {
        if (number % divider === 0) {
            results.push(`Por ${divider}`);
        }
    }

    document.getElementById("result").innerText = results;
});