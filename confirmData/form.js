const cartEl = document.querySelector("#cart-items");
const orderEL = document.querySelector("#order");



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
  