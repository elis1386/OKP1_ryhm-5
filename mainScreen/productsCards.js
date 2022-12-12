/* PRODUCTS CARDS ADD TO THE PAGE */
const pathToImages = "image";
const pathToProductsImages = `${pathToImages}/gallery`;
const items = document.querySelector("#gallery");
const cartItems = document.querySelector("#cart_products")


function renderProducts(products)
{
  products.forEach( product => {
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
    `
  });
}







function addToCartBtn() {
  increaseCount()
  const addToCart = document.querySelectorAll("figcaption[data-productId]");
  addToCart.forEach(function (btn) {
    btn.addEventListener("click", addedProductToCart);
  });
}

function addedProductToCart(product) {
/*   const productId = event.currentTarget.getAttribute("data-productId");
  console.log(productId); */
/*   cartItems.innerHTML =
  `<figure class="cart_photo">
            <img src="${pathToProductsImages}/${product.image}" alt="" />Photo
          </figure>
          <p>${product.name}</p>
          <p>${product.price}</p>
  ` */

}

renderProducts(products, items)








