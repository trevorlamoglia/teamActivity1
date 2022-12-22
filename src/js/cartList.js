import {
  renderListWithTemplate,
  getLocalStorage,
  removeLocalStorage
} from './utils.js';

export default class CartList {
  constructor(key, listElement) {
    this.key = key;
    this.listElement = listElement;
    this.itemTotal = 0; 
  }

  async init() {

    const list = getLocalStorage(this.key);
 
    if (list != '') {
      document.querySelector('.cart-footer').classList.remove('hide');
      this.calculateCartTotal(list)
    }
    this.reorganizeList(list);

    this.renderList(list);
  }

  reorganizeList(list) {
    const lookup = list.reduce((a, e) => {
      a[e.Id] = ++a[e.Id] || 0;
      return a;
    }, {});
    console.log(lookup);
    console.log(list.filter(e => lookup[e.Id]));

    return list;
  }

  calculateCartTotal(list) {
    const summaryElement = document.querySelector('.cart-footer');
    const amounts = list.map((item) => item.FinalPrice);
    this.itemTotal = amounts.reduce((sum, item) => sum + item);
    summaryElement.innerText = 'Total: $' + (this.itemTotal).toFixed(2);
  }

  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = '';
    //get the template
    const template = document.getElementById('cart-card-template');
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);

  }

  prepareTemplate(template, product) {
    template.querySelector('.cart-card__image').href = `/product_pages/product-details.html?product=${product.Id}`;
    template.querySelector('.cart-card__image img').src = product.Images.PrimaryMedium;
    template.querySelector('.cart-card__image img').alt += product.Name;
    template.querySelector('.cart-card__nameLink').href = `/product_pages/product-details.html?product=${product.Id}`;
    template.querySelector('.card__name').textContent = product.Name;
    template.querySelector('.cart-card__color').textContent = product.Colors[0].ColorName;
    template.querySelector('.cart-card__price').textContent += product.FinalPrice;
    return template;
  }
}