const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const inputNumber = document.getElementById("input-number");
const addFormContainer = document.querySelector(".container");
const card = document.querySelector(".card");

const valid = (input) => {
  const inputValue = input.value.trim();
  if (!inputValue) {
    card.innerHTML = ` 
      Error: Ingrese un número válido`;
    return false;
  }
  return true;
};

const error = () => {
  return `Ingrese un número del 1 al 5`;
};

const createCard = (pizza) => {
  return `<h2>${pizza.nombre}</h2>
      <img src= ${pizza.imagen}>
      <div class="container_info">
        <h4>Precio: $${pizza.precio}</h4>
      </div>
  `;
};

const saveLocalStorage = (pizza) => {
  localStorage.setItem("savePizza", JSON.stringify(pizza));
};

const renderCard = (pizzas) => {
  const numberId = Number(inputNumber.value);
  const pizzaFind = pizzas.find((pizza) => pizza.id === numberId);
  if (pizzaFind) {
    card.innerHTML = createCard(pizzaFind);
    saveLocalStorage(pizzaFind);
  } else {
    card.innerHTML = error();
  }
};

const addCard = (e) => {
  e.preventDefault();
  if (valid(inputNumber)) {
    renderCard(pizzas);
  }
};

const init = () => {
  addFormContainer.addEventListener("submit", addCard);
};

init();
