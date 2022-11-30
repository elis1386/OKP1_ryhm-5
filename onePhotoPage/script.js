const pathToImages = "image";
const pathToProductsImages = `${pathToImages}/gallery`;

function loadImage() {
  console.log(products);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const product = products.find((obj) => {
    return obj.id === id;
  });

  console.log(product);
  const section = document.createElement("section");
  const p1 = document.createElement("p");
  const p3 = document.createElement("p");
  const figure = document.createElement("img");
  //figure.setAttribute("id", product.id);
  figure.src = `${pathToProductsImages}/${product.image}`;

  p1.textContent = product.name;
  p3.textContent = "$" + product.price;
  section.appendChild(figure);

  section.appendChild(p1);
  section.appendChild(p3);
  document.body.appendChild(section);
}

loadImage();
