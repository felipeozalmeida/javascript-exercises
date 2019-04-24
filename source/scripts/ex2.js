const num = prompt("Insert a positive integer: ");
if (isNaN(num)) {
    alert("Not a number!");
} else if (num % 1 !== 0) {
    alert("Not an integer!");
} else if (num <= 0) {
    alert("Not a positive integer (exclusive)!");
}
    else {
    let i = 0;
    let s = 0;
    let equation = "S = ";
    for (i = 1; i <= num; i++) {
        s += 1/i;
        if (i < num) {
            equation += `1/${i} + `;
        } else {
            equation += `1/${i} =>`;
        }
    }
    document.write(`${equation}<br>S = ${s}<br>`);
}