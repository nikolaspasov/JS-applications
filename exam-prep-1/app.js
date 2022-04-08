import page from "./node_modules/page/page.mjs";


import homePage from "./pages/home/homePage.js";
import loginPage from "./pages/login/loginPage.js";
import navigationPage from "./pages/navigation/navigationPage.js";
import registerPage from "./pages/register/registerPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";
import allMemesPage from "./pages/allMemes/allMemesPage.js";
import memesService from "./services/memesService.js";
import createPage from "./pages/create/createPage.js";
import detailsPage from "./pages/details/detailsPage.js";
import editPage from "./pages/edit/editPage.js";
import profilePage from "./pages/profile/profilePage.js";
import notificationsPage from "./pages/notifications/notificationsPage.js";

let navigationElement = document.getElementById('nav');
let homeElement = document.getElementById('app');
let notificationsElement = document.getElementById('notifications');

//rendered е class, създава нов handler, който знае къде да закачи templateResult
let renderer = new LitRenderer();
//Подавам navigationElement, където трябва да се закачи резултатът. 
//navigationRenderHandler ще получава само templateResult и ще го закача.
let navigationRenderHandler = renderer.createRenderHandler(navigationElement)
let appRenderService = renderer.createRenderHandler(homeElement);
let notificationsRenderHandler = renderer.createRenderHandler(notificationsElement);


//Does it need AUTHSERVICE ?
navigationPage.initialize(page, navigationRenderHandler, authService);
homePage.initialize(page, appRenderService);
loginPage.initialize(page, appRenderService, authService);
registerPage.initialize(page, appRenderService, authService);
allMemesPage.initialize(page, appRenderService, memesService);
createPage.initialize(page, appRenderService, memesService);
detailsPage.initialize(page,appRenderService, memesService);
editPage.initialize(page,appRenderService, memesService);
profilePage.initialize(page,appRenderService, memesService);
notificationsPage.initialize(page,appRenderService, memesService);


page('/index.html', '/home');
page('/', '/home');

page(decorateContextWithUser);
page(navigationPage.getView);
//Винаги викаме navigationPage.getView()  == във всяка страница ни трябва
//може и така ->  page('*', navigationPage.getView())

page('/home', homePage.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/all-memes', allMemesPage.getView);
page('/create', createPage.getView);
page('/details/:id', detailsPage.getView);
page('/edit/:id', editPage.getView);
page('/profile', profilePage.getView);



page.start();

function decorateContextWithUser(context, next) {
    let user = authService.getUser();
    context.user = user;
    next();
}

//Това е за да добавим user-a към context-a на page ==> за ф-я isLoggedIn() 