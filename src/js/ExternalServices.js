const baseURL = 'http://server-nodejs.cit.byui.edu:3000/'
//const baseURL = 'http://server-nodejs.cit.byui.edu:3000/checkout';

async function convertToJson(res) {
  const response = await res.json();
  const JsonResp = JSON.stringify(response);

  if (res.ok) {
    return res.json();
  } else {
    throw { name: 'servicesError', message: JsonResp };
  }
}

export default class ExternalServices {
  constructor() {
    //Using the API means we don't need to tie the dataSource to a specific category anymore. So we can remove this in the constructor.
    // this.category = category;
    // this.path = `../json/${this.category}.json`;

  }
  getData(category) {
    // instead we will pass the category we want in here when we need it.
    return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson).then((data) => data.Result);
  }
  async findProductById(id) {
    //const products = await this.getData()
    //return products.find((item) => item.Id === id);
    // the API allows us to pull products directly from it by ID...so we can change this method as well to take advantage of that.
    return await fetch(baseURL + `product/${id}`).then(convertToJson)
      .then((data) => data.Result);
  }

  async checkout(payload) {
    console.log(payload);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    
    return await fetch(baseURL + 'checkout/', options);
  }

}
