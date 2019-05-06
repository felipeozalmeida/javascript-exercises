// generate fake data
const options = [];
let p = 5; // price
let q = 120; // quantity
const e = 200; // expenses
while (p >= 1) {
  options.push({
    price: p,
    quantity: q,
    profit: p * q - e
  });
  p -= 0.5;
  q += 26;
}

// render fake data
const tbody = document.querySelector("tbody");
options.forEach(option => {
  const row = document.createElement("tr");
  const values = Object.values(option);
  for (const value of values) {
    const cell = document.createElement("td");
    const cellContent = document.createTextNode(`${value}`);
    cell.appendChild(cellContent);
    row.appendChild(cell);
  }
  tbody.appendChild(row);
});

// find most profitable option
// po = profitableOption
// co = currentOption
const reducer = (po, co) => (co.profit > po.profit ? co : po);
const profitable = options.reduce(reducer);

// render most profitable option
const tblBestOption = document.querySelector("#best-option");
const entries = Object.entries(profitable);
for (const [key, value] of entries) {
  // row
  const row = document.createElement("tr");
  // header cell
  const headerCell = document.createElement("th");
  const headerCellContent = document.createTextNode(`${key}`);
  headerCell.appendChild(headerCellContent);
  row.appendChild(headerCell);
  // standard cell
  const standardCell = document.createElement("td");
  const standardCellContent = document.createTextNode(`${value}`);
  standardCell.appendChild(standardCellContent);
  row.appendChild(standardCell);
  // insert row into the table
  tblBestOption.appendChild(row);
}
