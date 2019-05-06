// Declaration of immutable values following
// Google Javascript Style Guide found here:
// https://google.github.io/styleguide/jsguide.html#naming-enum-names

const PaymentOption = {
  CASH: "cash",
  CREDIT: "credit"
};

const transactions = [];
let totalCash = 0;
let totalCreditCard = 0;
let totalOverall = 0;

for (let i = 0; i < 3; i++) {
  const transaction = {
    id: i,
    type: "",
    value: 0
  };
  const paymentOption = prompt(
    'What\'s the transaction type: "cash" or "credit"? (default: cash)'
  ).toLowerCase();
  if (paymentOption === PaymentOption.CREDIT) {
    transaction.type = paymentOption;
  } else {
    transaction.type = PaymentOption.CASH;
  }
  transaction.value = parseFloat(prompt("What's the transaction value?"));
  transactions.push(transaction);
}

transactions.forEach(transaction => {
  totalOverall += transaction.value;
  if (transaction.type === "cash") {
    totalCash += transaction.value;
  } else {
    totalCreditCard += transaction.value;
  }
});

alert(`Total by cash: $ ${totalCash}`);
alert(`Total by credit card: $ ${totalCreditCard}`);
alert(`Total overall: $ ${totalOverall}`);

transactions.forEach(transaction => {
  if (transaction.type !== "cash") {
    alert(
      `First installment of transaction ${transaction.id}: $ ${(
        transaction.value / 3
      ).toFixed(2)}`
    );
  }
});
