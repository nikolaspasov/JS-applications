import page from "./node_modules/page/page.mjs";

import homePage from "./pages/home/homePage.js";
import navigationPage from "./pages/navigation/navigationPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";


let navigationElement = document.getElementById('nav');
let homeElement = document.getElementById('app');

//rendered е class, създава нов handler, който знае къде да закачи templateResult
let renderer = new  LitRenderer();
//Подавам navigationElement, където трябва да се закачи резултатът. 
//navigationRenderHandler ще получава само templateResult и ще го закача.
let navigationRenderHandler = renderer.createRenderHandler(navigationElement)
let homeRenderHandler = renderer.createRenderHandler(homeElement);

//Does it need AUTHSERVICE ?
homePage.initialize(page, homeRenderHandler);
navigationPage.initialize(page, navigationRenderHandler);


page('/index.html', '/home');
page('/', '/home');

page(navigationPage.getView);
//Винаги викаме navigationPage.getView()  == във всяка страница ни трябва
//може и така ->  page('*', navigationPage.getView())

page('/home', homePage.getView);


page.start();