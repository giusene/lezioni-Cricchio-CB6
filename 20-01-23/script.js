const primoDiv = document.querySelector(".classDiv");
const secondoDiv = document.querySelector("#idDiv");
const button = document.querySelector("button");

const buttons = document.querySelectorAll("button");

console.log(primoDiv);
console.log(secondoDiv);
console.log(button);
console.log(buttons[1]);

primoDiv.classList.add("secondaClasse");
primoDiv.classList.remove("secondaClasse");

button.classList = "primaClasse";

buttons[1].textContent = "TESTO CAMBIATO";

const paragrafo = document.createElement("p");
paragrafo.textContent = "Questo è un elemento creato con javascript";
paragrafo.className = "classe1";
paragrafo.classList.add("classe2");

primoDiv.appendChild(paragrafo);

const image = document.createElement("img");
image.setAttribute("src", "#");
image.setAttribute("alt", "testo");
image.setAttribute("class", "pippo classe2 ciao");

image.classList.remove("pippo");

secondoDiv.appendChild(image);

button.addEventListener("click", () => {
  console.log("HAI cliccato");
  console.log("HAI cliccato2");
});

const metodoPerEvento = evento => {
  console.log(evento);
  console.log("sei sopra");
  console.log("sei sopra2");
};

image.addEventListener("mouseover", metodoPerEvento);

const formElement = document.querySelector("#form");

formElement.addEventListener("submit", evento => {
  evento.preventDefault();

  console.log(evento.target[0].value);
  console.log(evento.target[1].value);
});
