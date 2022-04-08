import { loginTemplate } from "./loginTemplate.js"

let _router = undefined;
let _renderHandler = undefined;
let _authService = undefined;
let _modelForTemplate= undefined;

function initialize(router, renderHandler, authService) {
    _router = router;
    _renderHandler = renderHandler;
    _authService = authService;
}

async function submitHandler(event){

    event.preventDefault();

    try{
        let formData = new FormData(event.target);
        _modelForTemplate.errorMessages = [];

        let username = formData.get('username');
        console.log(username);

        if(username.trim() === ''){
            _modelForTemplate.errorMessages.push('Email is required')

        }

        let password = formData.get('password')
        console.log(password);
        if(password.trim() === ''){
            _modelForTemplate.errorMessages.push('Password is required')

        }

        if(_modelForTemplate.errorMessages.length>0){
            let templateResult = loginTemplate(_modelForTemplate)
            alert(_modelForTemplate.errorMessages.join('\n'));
            return _renderHandler(templateResult);
        }

        let user = {
            username,
            password
        }

        await _authService.login(user)
        _router.redirect('/car-listings')
    }
    catch(error){
        alert(error);
    }
}


async function getView(context){

    _modelForTemplate = {
        submitHandler,
        //errorMessages: []
    }

    let templateResult = loginTemplate(_modelForTemplate);
    _renderHandler(templateResult);
}


export default {
    getView, initialize
}