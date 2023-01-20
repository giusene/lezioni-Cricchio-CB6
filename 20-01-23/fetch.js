const ulList = document.querySelector(".listaCategorie");

fetch("https://api.escuelajs.co/api/v1/products/1")
  .then(res => res.json())
  .then(data => elaborazioneDati(data));

const elaborazioneDati = arrayElementi => {
  console.log(arrayElementi);
  //   arrayElementi.forEach(element => {
  //     const liElement = document.createElement("li");
  //     liElement.textContent = element.title;
  //     ulList.appendChild(liElement);
  //   });
};
