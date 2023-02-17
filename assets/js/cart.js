/* Carrito */

// #1 Base de datos
const ctg = [
  {
    id: 1,
    category: "marketing",
    quantity: 10,
  },
  {
    id: 2,
    category: "emprendimiento_digital",
    quantity: 20,
  },
  {
    id: 2,
    category: "salud_deporte",
    quantity: 10,
  },
];

const db = [
  {
    id: 1,
    name: "Secretos para Administrar tu Restaurante",
    price: 49.99,
    image: "assets/img/Caja01.png",
    category: "marketing",
    quantity: 10,
    title_des: "¿Te gustaría aprender a administrar tu restaurante de forma efectiva?",
    description: "Con el masterclass SECRETOS PARA ADMINISTRAR TU RESTAURANTE aprenderás, de forma sencilla y amena, diferentes técnicas, herramientas y consejos para mejorar la administración de tu restaurante y así lograr el éxito esperado en el negocio de comidas.",
    url: "https://pay.hotmart.com/P60074607T?checkoutMode=10&bid=1676487232344",
  },
  {
    id: 2,
    name: "Youtuber desde cero para aprender y emprender",
    price: 49.99,
    image: "assets/img/caja02.png",
    category: "emprendimiento_digital",
    quantity: 10,
    title_des: "¿Sabías que todos los youtubers comenzaron teniendo cero seguidores?",
    description: "Con el masterclass YOUTUBER DESDE CERO PARA APRENDER Y EMPRENDER aprenderás a convertirte en un influencer en una red social con más de 1.000 millones de usuarios activos y convertir esta profesión en un negocio rentable sin necesidad de grandes equipos.",
    url: "https://pay.hotmart.com/J61620958R?checkoutMode=10&bid=1676611228427",
  },
  {
    id: 3,
    name: "Defensa Personal para principiantes",
    price: 49.99,
    image: "assets/img/caja03.png",
    category: "salud_deporte",
    quantity: 10,
    title_des: "¿Te gustaría saber un sistema de defensa personal para reaccionar ante un ataque físico o una situación de peligro? ",
    description: "Con el MasterClass DEFENSA PERSONAL PARA PRINCIPIANTES, aprenderás soluciones rápidas a problemas reales de peligro, mediante técnicas probadas y efectivas de Krav Maga.",
    url: "https://pay.hotmart.com/H75719473V?checkoutMode=10&bid=1676611426070",
  },
  {
    id: 4,
    name: "Vende con Reels, Shorts y Tiktoks",
    price: 49.99,
    image: "assets/img/caja04.png",
    category: "emprendimiento_digital",
    quantity: 10,
    title_des: "¿Sabías que el 90 por ciento del contenido audiovisual de las redes dura menos de un minuto?",
    description: "Con el MasterClass VENDE CON REELS, TIKTOKS Y SHORTS producirás contenido comercial corto para redes sociales con tu celular.",
    url: "https://pay.hotmart.com/C74601876W?checkoutMode=10&bid=1676610958058",
  },
  {
    id: 5,
    name: "Cobra y Crece Tu Negocio",
    price: 49.99,
    image: "assets/img/caja05.png",
    category: "marketing",
    quantity: 10,
    title_des: "¿Quisieras dar crédito a tus clientes para aumentar tus ventas, pero tienes temor por el recaudo del dinero?",
    description: "Con el MasterClass COBRA Y CRECE TU NEGOCIO, organizarás tu departamento de cobranza, fidelizarás tus clientes y aumentarás tu flujo de caja, con un método verificado y comprobado.",
    url: "https://pay.hotmart.com/T78673452Y?checkoutMode=10&bid=1676614192746",
  },  
  {
    id: 6,
    name: "Parkour Desde Cero Para Principiantes",
    price: 49.99,
    image: "assets/img/caja06.png",
    category: "salud_deporte",
    quantity: 10,
    title_des: "¿Quieres perder el miedo a moverte en la calle?",
    description: "Con el Master Class PARKOUR DESDE CERO PARA PRINCIPIANTES, utilizarás tu cuerpo como herramienta para moverte, aprovechando tus capacidades corporales y realizando movimientos que faciliten tu vida.",
    url: "https://pay.hotmart.com/Y70518718B?checkoutMode=10&bid=1676614697102",
  },    
];

const category = ctg;
const categoryContainer = document.getElementById("products__content");
// const products = window.localStorage.getItem("productsDB")
//   ? JSON.parse(window.localStorage.getItem("productsDB"))
//   : db;
  const products = db;

// #2 Pintar los productos en el DOM
const productContainer = document.getElementById("products__content");
function printProducts() {
  let html = "";
  let html2 = "";
  for (const product of products) {
    html += `
    <article class="products__card ${product.category}">
      <div class="container__card">
        <div class="card__father">
          <div class="card">
            <div class="card__front" style="background-image: url(${product.image});">
              <div class="body__card_front">
                <h1>VER MAS INFORMACION</h1>
              </div>
            </div>
            <div class="card__back">
              <div class="body__card_back">
                <h1><strong>${product.title_des}</strong></h1><br>
                ${product.description}
                <br><br>
                <a class="a" href="${product.url}" target="_blank">Ver mas información</a>
              </div>
            </div>
          </div>
        </div>      
      </div>
      <div class="products__data">
        <h2 class="products__name">${product.name}</h2>
        <div class="">
          <h3 class="products__price">$${product.price}</h3>
          <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
        </div>
        <button type="button" class="button products__button addToCart" data-id="${product.id}">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </article>
    `;
  }
  productContainer.innerHTML = html;
  window.localStorage.setItem("productsDB", JSON.stringify(products));
}

printProducts();

// #3 Carrito
let cart = window.localStorage.getItem("cartDB")
  ? JSON.parse(window.localStorage.getItem("cartDB"))
  : [];
const cartContainer = document.getElementById("cart__container");
const cartCount = document.getElementById("cart-count");
const itemsCount = document.getElementById("items-count");
const cartTotal = document.getElementById("cart-total");

function printCart() {
  let html = "";
  for (const article of cart) {
    const product = products.find((p) => p.id === article.id);
    html += `
    <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">${product.name} <span class="cart__price">$${
      product.price
    }</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${
                product.id
              }">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${product.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${
              product.id
            }"></i>
            </div>
            
            <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${
              product.quantity - article.qty
            } unidades</span>
            <span class="cart__subtotal-price">${
              product.price * article.qty
            }</span>
            </span>
            </div>
            </article>
            `;
  }
  cartContainer.innerHTML = html;
  cartCount.innerHTML = totalArticles();
  itemsCount.innerHTML = totalArticles();
  cartTotal.innerHTML = numberToCurrency(totalAmount());
  checkButtons();
  window.localStorage.setItem('cartDB', JSON.stringify(cart))
}

printCart();
// #4 Agragar al carrito
function addToCart(id, qty = 1) {
  const product = products.find((p) => p.id === id);
  if (product && product.quantity > 0) {
    const article = cart.find((a) => a.id === id);

    if (article) {
      if (checkStock(id, qty + article.qty)) {
        article.qty++;
      } else {
        swal('No hay stock suficiente','Lo Invitamos a ver otros pruductor Gracias','error');
      }
    } else {
      cart.push({ id, qty });
    }
  } else {
    swal('Producto agotado','Lo invitamos a ver otros productos...','error');
  }
  printCart();
}

function checkStock(id, qty) {
  const product = products.find((p) => p.id === id);
  return product.quantity - qty >= 0;
}

// #5 Remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find((a) => a.id === id);

  if (article && article.qty - qty > 0) {
    article.qty--;
  } else {
    const confirm = window.confirm("Estás Seguro??");
    if (confirm) {
      cart = cart.filter((a) => a.id !== id);
    }
  }
  printCart();
}

// #6 Eliminar del carrito
function deleteFromCart(id) {
  const article = cart.find((a) => a.id === id);
  cart.splice(cart.indexOf(article), 1);
  printCart();
}

// #7 Contar Artículos
function totalArticles() {
  return cart.reduce((acc, article) => acc + article.qty, 0);
}

// #8 El total
function totalAmount() {
  return cart.reduce((acc, article) => {
    /* Primero recorre los productos, la base de datos para traer las propiedades y luego busca al producto por su id y lo hace coincidir con el articulo, si lo encuntra multiplica el precio del producto por la cantidad de artículos del carrito*/
    const product = products.find((p) => p.id === article.id);
    return acc + product.price * article.qty;
  }, 0);
}

// #9 Limpiar Carrito
function clearCart() {
  cart = [];
  printCart();
}

// #10 Comprar
function checkout() {
  cart.forEach((article) => {
    const product = products.find((p) => p.id === article.id);
    product.quantity -= article.qty;
  });
  clearCart();
  printProducts();
  printCart();
  swal('Compra hecha con EXITO','GRACIAS POR PREFERIRNOS','success');
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById("cart-checkout").removeAttribute("disabled");
    document.getElementById("cart-empty").removeAttribute("disabled");
  } else {
    document
      .getElementById("cart-checkout")
      .setAttribute("disabled", "disabled");
    document.getElementById("cart-empty").setAttribute("disabled", "disabled");
  }
}

function numberToCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/* Agregando eventos a nuestros botones */
productContainer.addEventListener("click", function (e) {
  const add = e.target.closest(".addToCart");

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }
});

cartContainer.addEventListener("click", function (e) {
  const remove = e.target.closest(".removeToCart");
  const add = e.target.closest(".addToCart");
  const deleteCart = e.target.closest(".deleteToCart");

  if (remove) {
    const id = +remove.dataset.id;
    removeFromCart(id);
  }

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }

  if (deleteCart) {
    const id = +deleteCart.dataset.id;
    deleteFromCart(id);
  }
});

const actionButtons = document.getElementById("action-buttons");

actionButtons.addEventListener("click", function (e) {
  const clear = e.target.closest("#cart-empty");
  const buy = e.target.closest("#cart-checkout");

  if (clear) {
    clearCart();
  }

  if (buy) {
    checkout();
  }
});
