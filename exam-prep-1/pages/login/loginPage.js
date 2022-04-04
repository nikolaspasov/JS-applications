import { loginTemplate } from "./loginTemplate.js";


let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;
let _form = undefined;


function initialize(router, renderHandler, authService) {
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
    
}

async function submitHandler(event) {
    event.preventDefault();

    try {
        let formData = new FormData(event.target);
        _form.errorMessages = [];

        let email = formData.get('email');
        if(email.trim() === ''){
            _form.errorMessages.push('Email is required')
        }
        
        let password = formData.get('password');
        if(password.trim() === ''){
            _form.errorMessages.push('Password is required')
        }
        
        if(_form.errorMessages.length > 0){
            let templateResult = loginTemplate(_form);
            alert(_form.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }



        let user = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        let loginResult = await _authService.login(user);
        _router.redirect('/home');
    }
    catch (error) {
        alert(error);
    }
}

async function getView(context) {

    _form = {
        submitHandler,
        errorMessages: [],

    }

    let templateResult = loginTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}