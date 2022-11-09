 // Normally we have been creating a separate js file to hold this. I put it here to show that you can...the next question is should you?
 // Advantages to putting it here: one less file to request and download.
 // Disadvantages: it breaks the pattern we have established with our other pages, and the separation of concerns...
 import {
   loadHeaderFooter
 } from '../js/utils.js';
 import Admin from '../js/Admin.js';

 loadHeaderFooter();
 const myAdmin = new Admin('main');
 myAdmin.showLogin();
