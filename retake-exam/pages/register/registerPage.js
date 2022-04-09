import { registerTemplate } from "./registerTemplate.js";



let _router = undefined;
 let _renderHandler = undefined;
 let _authService = undefined;
 let errorMessages = [];
 let model = {};


function initialize(router, renderHandler, authService){
    _router=router;
    _renderHandler=renderHandler;
    _authService=authService;
}

async function submitHandler(event){
    event.preventDefault();
   
   try{
    let formData = new FormData(event.target);
    errorMessages=[];

    let email =  formData.get('email');
    let password= formData.get('password');
    let confirmPassword = formData.get('confirm-password')

    if(email.trim()=== ''){
        errorMessages.push('Email is required')
    }
    if(password.trim()=== ''){
        errorMessages.push('Password is required')
    }
    if(confirmPassword.trim()=== ''){
        errorMessages.push('Repeat password is required')
    }

    if(errorMessages.length>0){
        let templateResult = registerTemplate(model)
            alert(errorMessages.join('\n'));
            return _renderHandler(templateResult);

    }

    let user ={
        email,
        password
    }

    await _authService.register(user);
    _router.redirect('/home')
}
catch(error){
    alert(error);
}
}

async function getView(context, next){


    model = {
        submitHandler,
    };

    let templateResult = registerTemplate(model);
    _renderHandler(templateResult);

    
    next();
}



export default{
    getView,
    initialize
}