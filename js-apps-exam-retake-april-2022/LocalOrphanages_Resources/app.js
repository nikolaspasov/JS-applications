import page from "./node_modules/page/page.mjs";
import createPage from "./pages/create/createPage.js";

import dashboardPage from "./pages/dashboard/dashboardPage.js";
import detailsPage from "./pages/details/detailsPage.js";
import editPage from "./pages/edit/editPage.js";
import loginPage from "./pages/login/loginPage.js";
import myPostsPage from "./pages/myPosts/myPostsPage.js";
import navigationPage from "./pages/navigation/navigationPage.js";
import registerPage from "./pages/register/registerPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";
import postsService from "./services/postsService.js";

let navigationElement = document.querySelector('#box header')
let mainElement = document.getElementById('main-content')

let renderer = new LitRenderer();
let navigationRenderer = renderer.createRenderHandler(navigationElement);
let appRenderer = renderer.createRenderHandler(mainElement);

navigationPage.initialize(page, navigationRenderer, authService)
dashboardPage.initialize(page, appRenderer, postsService)
loginPage.initialize(page, appRenderer, authService)
registerPage.initialize(page, appRenderer, authService)
createPage.initialize(page, appRenderer, postsService)
detailsPage.initialize(page, appRenderer, postsService, authService)
editPage.initialize(page, appRenderer, postsService)
myPostsPage.initialize(page, appRenderer, postsService, authService)

page('/index.html', '/dashboard-page')
page('/', '/dashboard-page')

page(navigationPage.getView);


page('/dashboard-page', dashboardPage.getView)
page('/login', loginPage.getView)
page('/register', registerPage.getView)
page('/create-page', createPage.getView)
page('/details/:id', detailsPage.getView)
page('/edit/:id', editPage.getView)
page('/my-posts-page', myPostsPage.getView)



page.start();