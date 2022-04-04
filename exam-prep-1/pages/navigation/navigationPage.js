import { navigationTemplate } from "./navigationTemplate.js";


let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;

function initialize (router, renderHandler, authService){
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
}

async function logoutHandler(event){
    await _authService.logout();
    _router.redirect('/home');
}

async function getView(context, next){

    let user = context.user;
    let email = user !== undefined ? user.email : undefined;

    let navigationModel ={
        isLoggedIn: user !== undefined,
        email,
        logoutHandler
    }

    let templateResult = navigationTemplate(navigationModel);
    _renderHandler(templateResult);
    next();
}

export default{
    getView,
    initialize
}





// async function submitHandler(event){
//     event.preventDefault();
//     let formData = new FormData(event.target);

//     let user = {
//         email: formData.get('email'),
//         password: formData.get('password')
//     }
// }




