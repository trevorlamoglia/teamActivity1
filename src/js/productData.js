const baseURL = 'http://server-nodejs.cit.byui.edu:3000/'

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export default class ProductData  {
  constructor(category) {
    
  }
  getData() {
    return fetch(baseURL + `products/search/${category}`)
                .then(convertToJson).then((data) => data.Result);
  }
  async findProductById(id) {
    return await fetch(baseURL + `product/${id}`).then(convertToJson)
      .then((data) => data.Result);
  }
}
