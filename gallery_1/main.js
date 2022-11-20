
/* PRODUCTS CARDS ADD TO THE PAGE */
const pathToImages = 'image';
const pathToProductsImages = `${pathToImages}/cars`;
const items = document.querySelector('#gallery');

function getProductMarkup(product) {
    return `
    <figure class="item">
    <a href="../onePhotoPage/index.html" class="cart">
      <img src="${pathToProductsImages}/${product.image}" class="item__img" alt="${product.name}" />
    </a>
    <figcaption class="add_to_cart" data-productID="${product.id}">
      <a class="add" href="#" onclick="increaseCount(); return false"><i class="fa-solid fa-cart-shopping pop-up-cart"></i>Add to
        cart</a>
    </figcaption>
  </figure>
    `;
}

function insertProductsIntoPage(products, items) {
    let productsMarkup = '';
    for (let product of products)
    productsMarkup += getProductMarkup(product);

    items.insertAdjacentHTML('afterbegin', productsMarkup);
}

insertProductsIntoPage(products, items);

/* view more picture button */
function viewMore() {
  insertProductsIntoPage(products, items);
}

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventForAddToCart() {
    const addToCart = document.querySelectorAll('figcaption[data-productID]');
    addToCart.forEach(function (btn) {
        btn.addEventListener('click', addedProductHandler);
        console.log('click');
    })
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 */
function addedProductHandler(event) {
    const productID = event.currentTarget.getAttribute('data-productID');
    console.log(productID)
}

addEventForAddToCart();