import page from "./node_modules/page/page.mjs";


import allListingsPage from "./pages/allListings/allListingsPage.js";
import createPage from "./pages/create/createPage.js";
import detailsPage from "./pages/details/detailsPage.js";
import editPage from "./pages/edit/editPage.js";
import homePage from "./pages/home/homePage.js";
import loginPage from "./pages/login/loginPage.js";
import myListingsPage from "./pages/myListings/myListingsPage.js";
import navigationPage from "./pages/navigation/navigationPage.js";
import registerPage from "./pages/register/registerPage.js";
import searchPage from "./pages/search/searchPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";
import carsService from "./services/carsService.js";



let navigationElement = document.querySelector('#nav')
let mainElement = document.getElementById('site-content')

let renderer = new LitRenderer();
let navigationRenderHandle = renderer.createRenderHandler(navigationElement);
let appRenderHandler = renderer.createRenderHandler(mainElement);


navigationPage.initialize(page, navigationRenderHandle, authService);
homePage.initialize(page, appRenderHandler);
loginPage.initialize(page, appRenderHandler, authService);
registerPage.initialize(page, appRenderHandler, authService);
allListingsPage.initialize(page, appRenderHandler, carsService);
detailsPage.initialize(page, appRenderHandler, carsService);
createPage.initialize(page, appRenderHandler, carsService);
editPage.initialize(page, appRenderHandler, carsService);
myListingsPage.initialize(page, appRenderHandler, authService, carsService);
searchPage.initialize(page, appRenderHandler, carsService);


page('/index.html', '/home');
page('/', '/home');

page(addUserToContext);
page(navigationPage.getView);

page('/home', homePage.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/car-listings', allListingsPage.getView);
page('/details/:id', detailsPage.getView);
page('/create-listing', createPage.getView);
page('/edit/:id', editPage.getView);
page('/my-listings', myListingsPage.getView);
page('/search-cars', searchPage.getView);



page.start();


function addUserToContext(context, next){
    let user = authService.getUser();
    context.user = user;
    next();
}