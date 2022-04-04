import { registerTemplate } from "./registerTemplate.js";


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
        if (email.trim() === '') {
            _form.errorMessages.push('Email is required')
        }

        let password = formData.get('password');
        if (password.trim() === '') {
            _form.errorMessages.push('Password is required')
        }

        let repeatPass = formData.get('repeatPass');
        if (repeatPass.trim() === '') {
            _form.errorMessages.push('Repeat Password is required')
        }

        let username = formData.get('username');
        if (username.trim() === '') {
            _form.errorMessages.push('Username is required')
        }

        let gender = formData.get('gender');
        if (gender.trim() === '') {
            _form.errorMessages.push('Gender is required')
        }

        if (_form.errorMessages.length > 0) {
            let templateResult = registerTemplate(_form);
            alert(_form.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }



        let user = {
            email,
            password,
            username,
            gender
        }

        await _authService.register(user);
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

    let templateResult = registerTemplate(_form);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}