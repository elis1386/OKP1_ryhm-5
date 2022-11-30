const pathToImages = "image";
const pathToProductsImages = `${pathToImages}/gallery`;

function currentPhotoMarkup(product) {
  return `
<figure class="photo">
    <img src="${pathToProductsImages}/${product.image}" alt="" />
</figure>
<article class="description">
    <h1 class="product_title">${product.name}</h1>
    <article class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <p class="price">${product.price}</p>
        <a href="../cartPage/index.html";" class="add_to_cart">Add to cart</a>
    </article>
</article>
    `;
}

function insertCurrentPhoto() {
  const item = document.querySelector("#current_photo");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  for (let product of products) {
    if (product.id == productId) {
      console.log(product, productId);
      const productCopy = product;
      item.insertAdjacentHTML("afterbegin", currentPhotoMarkup(product));
      break;
    }
  }
}
insertCurrentPhoto();

//export { productCopy };
