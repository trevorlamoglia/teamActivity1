import {
  renderListWithTemplate
} from './utils.js';

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {

    // Data source returns promise so we need to wait
    const list = await this.dataSource.getData();

    this.renderList(list);
  }

  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = '';
    //get the template
    const template = document.getElementById('product-card-template');
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);

  }

  prepareTemplate(template, product) {

    template.querySelector('a').href += product.Id;
    template.querySelector('img').src = product.Image;
    template.querySelector('img').alt += product.Name;
    template.querySelector('.card__brand').textContent = product.Brand.Name;
    template.querySelector('.card__name').textContent = product.NameWithoutBrand;
    template.querySelector('.product-card__price').textContent += product.FinalPrice;
    return template;
  }

  // renderList(list) {
  //   const template = document.querySelector('#product-card-template');

  //   list.foreach(product => {
  //     const clone = template.content.cloneNode(true);

  //     this.listElement.appendChild(clone);
  //     const hydratedTemplate = this.prepareTemplate(clone, product);
  //     this.listElement.appendChild(hydratedTemplate);
  //   })
  // }

  // prepareTemplate(template, product) {
  //   template.querySelector('a').href += product.Id;
  //   return template;
  // }

}
