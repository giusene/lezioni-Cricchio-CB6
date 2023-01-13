const variabileCostante = "Giuseppe";
let variabileVariante = 38;
variabileVariante++;

console.log(variabileVariante);

//             0    1      2         3       4
const array = [1, true, "gigig", [4, [5], 6], {}];

console.log(array[3][2]);

const oggetto = {
  chiave: "valore",
  nome: "giuseppe",
  eta: 38,
  maschio: true,
  genitori: ["mario", "rosanna"],
};

oggetto.maschio = false;

console.log(oggetto.genitori[1]);

//                     0            1           2             3
const milanisti = ["giuseppe", "gianmarco", "zlatan", "Sandrino Tonali"];
console.log(milanisti.length);

for (let i = 0; i < milanisti.length; i++) {
  console.log(milanisti[i]);
}

for (let player of milanisti) {
  console.log(player);
}

for (let playerIn in milanisti) {
  console.log(playerIn);
}

milanisti.forEach((item, index) => {
  console.log(item, index);
});

const nome = "Gianmarco";
const eta = 24;

function saluta(user, age) {
  console.log("Ciao, mi chiamo " + user + " ed ho " + age + " anni");
  return "Ciao";
}

saluta(nome, eta);

const calcolo = (num1, num2) => num1 + num2;

console.log(calcolo(10, 20));
