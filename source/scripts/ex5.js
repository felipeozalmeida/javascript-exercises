const body = document.querySelector("body");
const clients = [];
let i = 0;
do {
    const client = {
        name: '',
        money: 0,
        discount: 0
    };
    client.name = prompt(`Enter name for client no. ${i + 1}: `);
    client.money = prompt(`Enter money spent for client no. ${i + 1}: `);
    if (client.money < 1000) {
        client.discount = client.money * .1;
    } else {
        client.discount = client.money * .15;
    }
    clients.push(client);
    i++;
} while (i < 3);
clients.forEach(client => {
    body.innerHTML += `<h2>${client.name}</h2>`;
    body.innerHTML += `<p>Money spent: ${client.money}</p>`;
    body.innerHTML += `<p>Discount: ${client.discount}</p>`;
    body.innerHTML += `<p>Total: ${client.money - client.discount}</p>`;
});