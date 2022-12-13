const pathToProductsImages = "gallery";
const addBtn = document.querySelector("#addToCart");
const cartEl = document.querySelector("#cart-items");
const orderEL = document.querySelector("#order");


function renderNewProductToCart(product) {
  return `
  <article class="image-box">
  <img
    src="${pathToProductsImages}/${product.image}" class="cart_photo" />
  </article>
  <article class="about">
    <h1 class="title">${product.name}</h1>
  </article>
   <article class="counter">
    <input type="text" placeholder="1" class="quantity" />
  </article>
  <article class="prices">
    <p class="amount">€${product.price}</p>
  </article>
  
    `;
}

function insertProductsIntoCart() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  for (let product of products) {
    if (product.id == productId) {
      console.log(product, productId);
      cartEl.insertAdjacentHTML("afterbegin", renderNewProductToCart(product));
      break;
    }
  }
}
insertProductsIntoCart();

function renderOrder(product) {
  return `
   <article class="order_info_product">
            <figure class="product_photo">
              <img src="${pathToProductsImages}/${product.image}" alt="" />
            </figure>
            <figcaption class="product_text">
              <h3>${product.name}</h3>
              <article class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>${product.price}€</p>
              </article>
            </figcaption>
          </article> 
  
    `;
}

function insertOrder() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  for (let product of products) {
    if (product.id == productId) {
      console.log(product, productId);
      orderEL.insertAdjacentHTML("afterend", renderOrder(product));
      break;
    }
  }
}


function showConfirmModal() {
  const confirmModal = document.querySelector("#confirm");
  confirmModal.showModal();
  insertOrder();
}


  const remove = document.querySelector("#remove")
  const cartItems = document.querySelector("#cart-items")
  const confirmBtn = document.querySelector("#confirm")
  remove.addEventListener('click', function(){
    cartItems.style.opacity = "0";
    confirmBtn.style.opacity = "0";
    console.log('click')
  })
 

