document.getElementById("button").addEventListener("click", function() {

    const number = parseInt(document.getElementById("num1").value);
    const dividers = [2, 3, 5, 7];
    let results = [];

    for (let divider of dividers) {
        if (number % divider === 0) {
            results.push(`Por  ${divider}`);
        }
    }

    document.getElementById("result").innerText = results;
});