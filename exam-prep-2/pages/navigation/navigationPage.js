import { navigationTemplate } from "./navigationTemplate.js"

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined

function initialize (router, renderHandler, authService){

    _router=router;
    _renderHandler= renderHandler;
    _authService=authService;

}


async function getView(context, next){

    let user = context.user;

    let model = {
        
        isLoggedIn: user !== undefined,
    }
    
    let templateResult = navigationTemplate(model);
    _renderHandler(templateResult);
    
    next();
}


export default{
    getView,
    initialize
}