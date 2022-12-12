import ExternalServices from './ExternalServices';
import ProductList from './productList';
import { loadHeaderFooter } from './utils.js';
import Alert from './alert';

loadHeaderFooter();


const myData = new ExternalServices('tents');
const listElement = document.querySelector('.product-list');

const myList = new ProductList('tents', myData, listElement);

myList.init();


const alert = new Alert();

alert.createAlert();