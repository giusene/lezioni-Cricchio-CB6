import { POST, GET, PUT, DELETE, qS, cE } from "./libs.js";

const cartIcon = qS("#cart-icon");
const cartModal = qS(".cart-modal");
const heroSection = qS(".image-preview");

const imgList = [
  {
    url: "https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg",
    title: "titolo",
  },
  {
    url: "https://www.w3schools.com/css/img_lights.jpg",
    title: "titolo",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    title: "titolo",
  },
];

let cart;

if (localStorage.getItem("cricchioCart")) {
  cart = JSON.parse(localStorage.getItem("cricchioCart"));
} else {
  cart = [];
}

//importo le categorie prodotti
GET("products").then(data => elaborazioneProdotti(data));

let elaborazioneProdotti = array => {
  insertCat(array);
};

let cardContainer = document.querySelector(".cardsContainer");
let count = 0;
const insertCat = array => {
  array.forEach(element => {
    count++;
    let card = document.createElement("div");
    card.setAttribute("id", count);
    card.classList.add("card");
    let img = document.createElement("img");
    let title = document.createElement("p");
    title.classList.add("titleCard");
    title.textContent = element.title;
    let price = document.createElement("h3");
    price.textContent = "€" + element.price + ".00";
    img.setAttribute("src", element.images);

    const cartBtn = cE("button");
    cartBtn.textContent = "Aggiungi al carrello";

    cartBtn.addEventListener("click", () => {
      const checkCart = cart.filter(item => item.id === element.id);
      if (checkCart.length > 0) {
        cart = cart.map(item => {
          if (item.id === element.id) {
            item.qty++;
          }
          return item;
        });
      } else {
        const newElement = {
          ...element,
          qty: 1,
        };
        cart.push(newElement);
      }

      cartGenerator();
    });

    card.append(img, title, price, cartBtn);
    cardContainer.appendChild(card);
  });
};

cartIcon.addEventListener("click", () => {
  cartModal.classList.toggle("show-cart");
});

const cartGenerator = () => {
  localStorage.setItem("cricchioCart", JSON.stringify(cart));
  cartModal.innerHTML = "";

  cart.forEach(item => {
    const cartRow = cE("div");

    const qtyInput = cE("input");
    qtyInput.setAttribute("type", "number");
    qtyInput.setAttribute("value", item.qty);

    qtyInput.addEventListener("change", () => {
      cart = cart.filter(element => element.id !== item.id);
      console.log("forza milan");

      if (qtyInput.value > 0) {
        const newItem = {
          ...item,
          qty: qtyInput.value,
        };
        cart.push(newItem);
      }

      cartGenerator();
    });

    const pTitle = cE("p");
    pTitle.className = "title";
    pTitle.textContent = item.title;

    const pPrice = cE("p");
    pPrice.textContent = item.price;

    const totalPrice = cE("p");
    totalPrice.textContent = item.price * item.qty;

    cartRow.append(qtyInput, pTitle, pPrice, totalPrice);

    cartModal.appendChild(cartRow);
  });
};
cartGenerator();

const sliderGenerator = (imgArray, container) => {
  imgArray.forEach(item => {
    const img = cE("img");
    img.setAttribute("src", item.url);
    img.setAttribute("alt", item.title);
    img.className = "img-slide";

    container.appendChild(img);
  });
};

sliderGenerator(imgList, heroSection);

const sliderAnimator = () => {
  let imgIndex = 0;
  const allImages = document.querySelectorAll(".img-slide");

  setInterval(() => {
    if (imgIndex < allImages.length) {
      allImages[imgIndex].classList.add("show");
      imgIndex++;
    } else {
      allImages.forEach(item => item.classList.remove("show"));
      allImages[0].classList.add("show");
      imgIndex = 1;
    }
  }, 3000);
};

sliderAnimator();
