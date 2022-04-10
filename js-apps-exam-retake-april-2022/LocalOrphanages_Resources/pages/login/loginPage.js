import { loginTemplate } from "./loginTemplate.js";



let _router = undefined;
let _renderer = undefined;
let _authService = undefined;
let errorMessages = [];
let model = {};


function initialize(router, renderer, authService) {
    _router = router;
    _renderer = renderer;
    _authService = authService;
}

async function submitHandler(event) {
    event.preventDefault();
    try {
        let formData = new FormData(event.target);
        errorMessages = [];

        let email = formData.get('email');
        let password = formData.get('password');

        if (email.trim() === '') {
            errorMessages.push('Email is required')
        }
        if (password.trim() === '') {
            errorMessages.push('Password is required')
        }

        if (errorMessages.length > 0) {
            let templateResult = loginTemplate(model);
            alert(errorMessages.join('\n'));
            return _renderer(templateResult);
        }

        let user = {
            email,
            password
        }

        await _authService.login(user);
        _router.redirect('/dashboard-page')
    } catch (error) {
        alert(error);
    }
}

async function getView(context, next) {


     model = {
        submitHandler,
    };

    let templateResult = loginTemplate(model);
    _renderer(templateResult);

}



export default {
    getView,
    initialize
}