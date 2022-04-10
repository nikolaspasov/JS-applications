import { navigationTemplate } from "./navigationTemplate.js";

let _router = undefined;
let _renderer = undefined;
let _authService = undefined

function initialize (router, renderer, authService){

    _router=router;
    _renderer= renderer;
    _authService=authService;

}

async function logoutHandler(event){

    await _authService.logout();
    _router.redirect('/dashboard-page');
}

async function getView(context, next){

    let user = _authService.getUser();
    
    let username = user !== undefined 
    ? user.username 
    : undefined;

    let model = {
        isLoggedIn: user !== undefined,
        logoutHandler,
        username
    }
    
    let templateResult = navigationTemplate(model);
    _renderer(templateResult);
    
    next();
}


export default{
    getView,
    initialize
}