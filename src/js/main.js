import ExternalServices from './ExternalServices';
import ProductList from './productList';
import { loadHeaderFooter,modalOpen, modalClose } from './utils.js';
import Alert from './alert';


loadHeaderFooter();


const myData = new ExternalServices('tents');
const listElement = document.querySelector('.product-list');

const myList = new ProductList('tents', myData, listElement);

myList.init();


const alert = new Alert();

alert.createAlert();

const newsletterBtn = document.querySelector(".newsletter-btn");
const newsletterBtnClose = document.querySelector(".newsletter-close-btn");
const newsletter = document.querySelector(".newsletter");

window.onload=function(){
    newsletterBtn.addEventListener("click", modalOpen);
    newsletterBtnClose.addEventListener("click", modalClose);
}