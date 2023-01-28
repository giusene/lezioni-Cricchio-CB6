import { POST, GET, PUT, DELETE } from "./libs.js";

const title = document.querySelector("h1");

const newObj = {
  price: 400,
};

// POST("products", newObj).then(
//   data => (title.textContent = "PRODOTTO CARICATO!")
// );

// PUT("products", newObj, 580).then(data => console.log(data));

GET("products").then(data => console.log(data));

// DELETE("products", 580).then(data => console.log(data));
