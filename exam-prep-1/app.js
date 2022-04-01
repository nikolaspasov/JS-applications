import page from "./node_modules/page/page.mjs";

import homePage from "./pages/home/homePage.js";
import navigationPage from "./pages/navigation/navigationPage.js";


let navigationElement = document.getElementById('nav');
let homeElement = document.getElementById('app');

let renderer = new 

homePage.initialize(page, );
navigationPage.initialize(page, );


page('/index.html', '/home');
page('/', '/home');

page('/home', homePage.getView);
page('/navigation', navigationPage.getView)

page.start();