const pathToProductsImages = 'gallery';
const addBtn = document.querySelector("#addToCart");
const cartEl = document.querySelector("#cart-items");



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
    <p class="amount">$${product.price}</p>
  </article>
  
    `;
}

function insertProductsIntoCart() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  for (let product of products) {
    if (product.id == productId) {
        console.log(product,productId)
      cartEl.insertAdjacentHTML("afterbegin", renderNewProductToCart(product));
      break;
    }
  }
}
insertProductsIntoCart();


function showConfirmModal()
{
  const confirmModal = document.querySelector('#confirm')
  confirmModal.showModal()
}
   
 

