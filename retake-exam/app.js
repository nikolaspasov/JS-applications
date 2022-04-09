import page from "./node_modules/page/page.mjs";
import catalogPage from "./pages/catalog/catalogPage.js";
import createPage from "./pages/create/createPage.js";
import detailsPage from "./pages/details/detailsPage.js";
import editPage from "./pages/edit/editPage.js";
import homePage from "./pages/home/homePage.js";
import loginPage from "./pages/login/loginPage.js";
import navigationPage from "./pages/navigation/navigationPage.js";
import registerPage from "./pages/register/registerPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";
import gamesService from "./services/gamesService.js";


let navigationElement = document.querySelector('#box header');
let mainElement  = document.getElementById('main-content')

let renderer = new LitRenderer();
let navigationRenderer = renderer.createRenderHandler(navigationElement);
let appRenderer = renderer.createRenderHandler(mainElement);

navigationPage.initialize(page, navigationRenderer, authService);
homePage.initialize(page, appRenderer, gamesService);
loginPage.initialize(page,appRenderer, authService);
registerPage.initialize(page,appRenderer, authService);
catalogPage.initialize(page,appRenderer, gamesService);
homePage.initialize(page,appRenderer, gamesService);
detailsPage.initialize(page,appRenderer, gamesService, authService);
createPage.initialize(page,appRenderer, gamesService);
editPage.initialize(page,appRenderer, gamesService);



page('/index.html', '/home')
page('/', '/home')

page(navigationPage.getView)

page('/home', homePage.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/catalog-page', catalogPage.getView);
page('/details/:id', detailsPage.getView);
page('/create-page', createPage.getView);
page('/edit/:id', editPage.getView);





page.start();