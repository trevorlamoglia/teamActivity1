function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    fetch("../json/tents.json")
      .then(convertToJson)
      .then((data) => {
        products = data;
      });
  }
  findProductById(id) {}
}

getProductsData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);

// get tents data
