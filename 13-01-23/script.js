import { products } from "./productsList.js";

products.forEach((item, index) => {
  console.log(item.title);
});

const prices = products.map((item, index) => item.price);
console.log(prices);

const ids = products
  .filter((item, index) => item.price < 50)
  .map(item => item.price);
console.log(ids);
