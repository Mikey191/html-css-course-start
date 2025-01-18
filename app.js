let fund = +prompt("Credit sum");
let creditBody = fund + 0.2 * fund;
let monthlyPayment = creditBody / 12;

for (let month = 1; month <= 12; month++) {
  console.log("month " + month + " payment " + monthlyPayment);
}

let arr = [1, 2, 3, 4, 5, 6];

for (let element in arr) {
  console.log(element);
}

for (let element of arr) {
  console.log(element);
}
