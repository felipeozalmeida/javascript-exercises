for (let i = 1; i <= 10; i++) {
  document.write(`${i} times table<br><br>`);
  for (let j = 1; j <= 10; j++) {
    document.write(`${j} * ${i} = ${j * i}<br>`);
  }
  document.write("<br>");
}
