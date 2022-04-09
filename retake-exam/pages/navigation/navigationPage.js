import { navigationTemplate } from "./navigationTemplate.js";

let _router = undefined;
 let _renderHandler = undefined;
 let _authService = undefined;


function initialize(router, renderHandler, authService){
    _router=router;
    _renderHandler=renderHandler;
    _authService=authService;
}

async function logoutHandler(event){

    await _authService.logout();
    _router.redirect('/home')

}

async function getView(context, next){

    let user = _authService.getUser();

    let model = {
        isLoggedIn: user !== undefined,
        logoutHandler
    }

    let templateResult = navigationTemplate(model);
    _renderHandler(templateResult);

    
    next();
}



export default{
    getView,
    initialize,
}