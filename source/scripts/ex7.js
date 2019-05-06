let count = 0;
let people = 0;

do {
  const age = prompt("What's your age?");
  if (age >= 18) {
    people += 1;
  }
  count++;
} while (count < 5);

document.write(`<p>No. of people older than 17: ${people}</p>`);
