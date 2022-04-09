import { loginTemplate } from "./loginTemplate.js";



let _router = undefined;
 let _renderHandler = undefined;
 let _authService = undefined;


function initialize(router, renderHandler, authService){
    _router=router;
    _renderHandler=renderHandler;
    _authService=authService;
}

async function submitHandler(event){
    event.preventDefault();
    let formData = new FormData(event.target);

    let user ={
        email:formData.get('email'),
        password:formData.get('password')
    }

    await _authService.login(user);
    _router.redirect('/home')
}

async function getView(context, next){


    let model = {
        submitHandler,
    };

    let templateResult = loginTemplate(model);
    _renderHandler(templateResult);

    
    next();
}



export default{
    getView,
    initialize
}