/* PRODUCTS CARDS ADD TO THE PAGE */
const pathToImages = "image";
const pathToProductsImages = `${pathToImages}/gallery`;
const items = document.querySelector("#gallery");
const cartItems = document.querySelector("#cart_products");

function renderProducts(products) {
  products.forEach((product) => {
    items.innerHTML += `
    <figure class="item">
    <a href="../onePhotoPage/index.html?id=${product.id}" class="cart">
      <img src="${pathToProductsImages}/${product.image}" class="item__img" alt="${product.name}" />
    </a>
    <figcaption class="add_to_cart" data-productId="${product.id}">
      <a class="add" href="#" onclick="addToCartBtn(); return false"><i class="fa-solid fa-cart-shopping pop-up-cart"></i>Add to
        cart</a>
    </figcaption>
  </figure>
    `;
  });
}




function addToCartBtn() {
  increaseCount();
  const addToCart = document.querySelectorAll("figcaption[data-productId]");
  addToCart.forEach(function (btn) {
    btn.addEventListener("click", addProductToCart(product));
  });

  function addProductToCart(product) {
   cartItems.innerHTML = ` <article class="cart_items">
    <figure class="cart_photo">
      <img src="${pathToProductsImages}/${product.image}" alt="" />
    </figure>
    <figcaption class="cart_caption">
      <p class="cart_name">${product.name}</p>
      <p class="cart_price">€${product.price}</p>
    </figcaption>
  </article>
<hr>
`;
  }
 
}

renderProducts(products, items);



/* 
const productId = click.currentTarget.getAttribute("data-productId");
console.log(productId);
for (let product of products) {
  if (product.id == productId) {
    cartEl.insertAdjacentHTML("afterbegin", renderNewProductToCart(product));
    break;
  }
} */