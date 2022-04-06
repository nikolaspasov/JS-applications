import page from "./node_modules/page/page.mjs";


import homePage from "./pages/home/homePage.js";
import navigationPage from "./pages/navigation/navigationPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";



let navigationElement = document.querySelector('#nav')
let mainElement = document.getElementById('site-content')

let renderer = new LitRenderer();
let navigationRenderHandle = renderer.createRenderHandler(navigationElement);
let appRenderHandler = renderer.createRenderHandler(mainElement);


navigationPage.initialize(page, navigationRenderHandle, authService);
homePage.initialize(page, appRenderHandler);


page('/index.html', '/home');
page('/', '/home');

page(addUserToContext);
page(navigationPage.getView);

page('/home', homePage.getView);



page.start();


function addUserToContext(context, next){
    let user = authService.getUser();
    context.user = user;
    next();
}